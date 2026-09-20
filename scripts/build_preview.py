#!/usr/bin/env python3
"""Build a single self-contained HTML file from the running dev server.

Fetches the rendered page, inlines the real stylesheet, embeds every asset as a
data URI, strips the Next.js runtime and re-adds the pointer-following mesh in
plain script, so the result is a faithful snapshot of the app that opens
anywhere offline.

Usage:  npm run dev          # in one shell
        python3 scripts/build_preview.py [out.html]
"""

import base64
import mimetypes
import pathlib
import re
import sys
import urllib.request

ORIGIN = "http://localhost:4321"
ROOT = pathlib.Path(__file__).resolve().parent.parent

# Usage: build_preview.py [out.html] [route]
# The route defaults to the homepage; pass "/education" to snapshot that page.
OUT = pathlib.Path(sys.argv[1]) if len(sys.argv) > 1 else ROOT / "preview" / "lset-homepage.html"
ROUTE = sys.argv[2] if len(sys.argv) > 2 else "/"

def font_links() -> str:
    """Lift the Google Fonts URL straight out of app/layout.tsx.

    The stripped <head> takes the app's own font <link> with it, so it has to be
    re-added here — but hardcoding a copy silently drifts the moment a weight is
    added, and the snapshot then renders a different weight than the app.
    """
    layout = (ROOT / "app" / "layout.tsx").read_text()
    m = re.search(r'href="(https://fonts\.googleapis\.com/css2\?[^"]+)"', layout)
    if not m:
        sys.exit("Could not find the Google Fonts link in app/layout.tsx")
    return (
        '<link rel="preconnect" href="https://fonts.googleapis.com">\n'
        '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n'
        f'<link rel="stylesheet" href="{m.group(1)}">\n'
    )


def fetch(path: str) -> str:
    return urllib.request.urlopen(ORIGIN + path).read().decode()


def main() -> None:
    html = fetch(ROUTE)

    hrefs = re.findall(r'<link[^>]+rel="stylesheet"[^>]+href="([^"]+)"', html)
    hrefs += re.findall(r'<link[^>]+href="([^"]+\.css[^"]*)"[^>]*rel="stylesheet"', html)
    hrefs = [h for h in dict.fromkeys(hrefs) if h.startswith("/_next")]
    if not hrefs:
        sys.exit("No stylesheets found — is the dev server running on 4321?")
    css = "\n".join(fetch(h) for h in hrefs)

    cache: dict[str, str] = {}

    def data_uri(rel: str) -> str:
        if rel not in cache:
            p = ROOT / "public" / rel.lstrip("/")
            mime = mimetypes.guess_type(str(p))[0] or "application/octet-stream"
            cache[rel] = f"data:{mime};base64," + base64.b64encode(p.read_bytes()).decode()
        return cache[rel]

    # Strip the scripts BEFORE resolving asset URLs, not after. Next serialises
    # the RSC payload into <script> chunks and will split a string across two of
    # them, so the document can contain a fragment like "/assets/proof-2.j" that
    # matches the pattern below and resolves to no file. It killed this script
    # the moment NavBar became a client component and the chunk boundaries moved.
    # The snapshot discards every script anyway, so nothing inside one is a real
    # reference.
    html = re.sub(r"<script[^>]*>.*?</script>", "", html, flags=re.S)
    html = re.sub(r"<script[^>]*/?>", "", html)

    # One path segment was enough until the carousel slides arrived in
    # /assets/antz-carousel/. Without the subdirectory the pattern matched
    # "/assets/antz-carousel" and tried to read the folder as a file
    # (IsADirectoryError). The trailing [^/] keeps it from swallowing a bare
    # directory reference, so only real files are inlined.
    #
    # The last character cannot be a dot. It could, and the CSS in this repo
    # carries long prose comments that name their own assets — WaveRule's
    # "lives in /assets/logo-rule-wave.svg. See the README" ends a sentence on
    # one, and dev serves comments through unminified. The pattern took the
    # full stop with the filename and went looking for "logo-rule-wave.svg.",
    # which is not a file. A real reference always ends on the extension, so
    # ending the match on an alphanumeric costs nothing and closes it.
    asset_re = re.compile(r"/assets/(?:[A-Za-z0-9._-]+/)*[A-Za-z0-9._-]*[A-Za-z0-9_-]")
    css = asset_re.sub(lambda m: data_uri(m.group(0)), css)
    html = asset_re.sub(lambda m: data_uri(m.group(0)), html)
    html = re.sub(r'<link[^>]+(rel="stylesheet"|rel="preload"|\.css)[^>]*>', "", html)
    body = re.search(r"<body[^>]*>(.*)</body>", html, flags=re.S).group(1)

    # There was a guard here that resolved the accordion's hashed chevronOpen
    # class out of the CSS bundle and exited hard when a page carrying a board
    # did not have one, because a snapshot that shipped a dead accordion was
    # worth failing over. The boards stopped being accordions: every row stands
    # open, there is no chevron, and each row is a plain <a>. A link needs no
    # script to work in a snapshot, so both the guard and the script it guarded
    # are gone rather than repaired — and the guard did fire, exactly as
    # designed, the moment the class it looks for stopped existing.

    # The stripped <head> takes the app's own <title> with it. Reuse the real
    # one from the fetched page so each route's snapshot is named correctly,
    # rather than every file claiming to be the homepage.
    m = re.search(r"<title>(.*?)</title>", html, re.S)
    doc_title = m.group(1).strip() if m else "LSeT Foundation"

    page = f"""<title>{doc_title}</title>
{font_links()}<style>
/* The page is responsive, so the snapshot fills the viewport and reflows with
   it — resize the window to see the breakpoints. */
:root {{ color-scheme: dark; }}
html, body {{ margin: 0; background: #ffffff; }}
@media (prefers-reduced-motion: reduce) {{
  * {{ transition: none !important; animation: none !important; }}
}}
</style>

<!-- ---- The application's own stylesheet, inlined verbatim ---- -->
<style>
{css}
</style>

{body}

<script>
(function () {{
  // Pointer-following mesh — mirrors components/usePointerMesh.ts.
  //
  // The snapshot has no React, so the hook's effect never runs and the mesh
  // would be left with only its scroll swirl. This is the same contract in
  // plain script: set --mesh-mx / --mesh-my on the section, let the CSS
  // transition do the easing. Keep the two in step when either changes.
  if (
    matchMedia("(hover: hover) and (pointer: fine)").matches &&
    !matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {{
    Array.prototype.forEach.call(
      document.querySelectorAll(
        "[class*='MeshField_field__'], [class*='NavBar_drawer__']"
      ),
      function (el) {{
        var frame = 0, cx = 0, cy = 0, centre = false;
        function write() {{
          frame = 0;
          if (centre) {{
            el.style.setProperty("--mesh-mx", "0");
            el.style.setProperty("--mesh-my", "0");
            return;
          }}
          var r = el.getBoundingClientRect();
          if (!r.width || !r.height) return;
          function clamp(n) {{ return n < -1 ? -1 : n > 1 ? 1 : n; }}
          el.style.setProperty("--mesh-mx", clamp(((cx - r.left) / r.width) * 2 - 1).toFixed(3));
          el.style.setProperty("--mesh-my", clamp(((cy - r.top) / r.height) * 2 - 1).toFixed(3));
        }}
        function queue() {{ if (!frame) frame = requestAnimationFrame(write); }}
        el.addEventListener("pointermove", function (e) {{
          centre = false; cx = e.clientX; cy = e.clientY; queue();
        }}, {{ passive: true }});
        el.addEventListener("pointerleave", function () {{ centre = true; queue(); }});
      }}
    );
  }}

  // Counting stats — mirrors components/StatsBand/StatsBand.tsx.
  //
  // The figures are already correct in this HTML; this only animates up to
  // them, so with the script gone the band still reads properly. Keep the two
  // implementations in step when either changes.
  if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {{
    var cells = Array.prototype.slice.call(document.querySelectorAll("[data-count]"));
    if (cells.length) {{
      var DURATION = 1100, STAGGER = 90;
      var finalText = cells.map(function (c) {{ return c.textContent; }});
      var run = function (el, delay) {{
        var target = Number(el.getAttribute("data-count"));
        var suffix = el.getAttribute("data-suffix") || "";
        var start = performance.now() + delay;
        var idx = cells.indexOf(el);
        var tick = function (now) {{
          if (now < start) return requestAnimationFrame(tick);
          var t = Math.min(1, (now - start) / DURATION);
          var eased = 1 - Math.pow(1 - t, 3);
          el.textContent = Math.round(target * eased) + suffix;
          if (t < 1) requestAnimationFrame(tick);
          else el.textContent = finalText[idx];
        }};
        requestAnimationFrame(tick);
      }};
      var io = new IntersectionObserver(function (entries) {{
        entries.forEach(function (entry) {{
          var el = entry.target;
          if (entry.isIntersecting) {{
            io.unobserve(el);
            run(el, cells.indexOf(el) * STAGGER);
          }} else if (entry.boundingClientRect.bottom < 0) {{
            io.unobserve(el);
          }} else {{
            el.textContent = "0" + (el.getAttribute("data-suffix") || "");
          }}
        }});
      }}, {{ threshold: 0.6 }});
      cells.forEach(function (c) {{ io.observe(c); }});
    }}
  }}

  // Antz module carousel — mirrors components/Antz/AntzCarousel.tsx.
  //
  // The whole presentation lives in CSS behind `data-state` and `--dir`, so
  // this only has to move attributes; with the script gone the first slide
  // still shows as a static hero. Keep the two in step when either changes.
  Array.prototype.forEach.call(document.querySelectorAll("[data-antz-carousel]"), function (track) {{
    var slides = Array.prototype.slice.call(track.querySelectorAll("[data-state]"));
    if (!slides.length) return;
    var region = track.closest('[aria-roledescription="carousel"]') || track;
    var dots = Array.prototype.slice.call(region.querySelectorAll("[aria-current]"));
    var count = slides.length, active = 0;
    var reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    var AUTOPLAY_MS = 4500, RESUME_AFTER_MS = 8000, DRAG_THRESHOLD = 45;
    var hovered = false, pauseUntil = 0;

    // Class names are hashed by css-loader, so the active dot's class is read
    // off whichever dot starts active rather than being written literally.
    var activeDotClass = (function () {{
      for (var i = 0; i < dots.length; i++) {{
        if (dots[i].getAttribute("aria-current") === "true") {{
          var cls = dots[i].className.split(/\s+/);
          for (var j = 0; j < cls.length; j++) if (/dotActive/.test(cls[j])) return cls[j];
        }}
      }}
      return null;
    }})();

    function offsetOf(i) {{
      var d = i - active;
      if (d > count / 2) d -= count;
      if (d < -count / 2) d += count;
      return d;
    }}
    function render() {{
      slides.forEach(function (el, i) {{
        var o = offsetOf(i), abs = Math.abs(o);
        el.setAttribute("data-state", o === 0 ? "active" : abs === 1 ? "side" : "hidden");
        el.style.setProperty("--dir", String(Math.sign(o)));
        el.style.zIndex = String(10 - abs);
      }});
      dots.forEach(function (d, i) {{
        d.setAttribute("aria-current", i === active ? "true" : "false");
        if (activeDotClass) d.classList.toggle(activeDotClass, i === active);
      }});
    }}
    function note() {{ pauseUntil = Date.now() + RESUME_AFTER_MS; }}
    function go(i) {{ active = ((i % count) + count) % count; render(); }}
    function prev() {{ note(); go(active - 1); }}
    function next() {{ note(); go(active + 1); }}

    region.addEventListener("mouseenter", function () {{ hovered = true; }});
    region.addEventListener("mouseleave", function () {{ hovered = false; }});
    region.addEventListener("keydown", function (e) {{
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }});
    dots.forEach(function (d, i) {{ d.addEventListener("click", function () {{ note(); go(i); }}); }});
    var btns = Array.prototype.slice.call(track.querySelectorAll("button[aria-label]"));
    btns.forEach(function (b) {{
      var lbl = (b.getAttribute("aria-label") || "").toLowerCase();
      if (lbl.indexOf("previous") === 0) b.addEventListener("click", prev);
      else if (lbl.indexOf("next") === 0) b.addEventListener("click", next);
    }});
    slides.forEach(function (el, i) {{
      el.addEventListener("click", function () {{
        if (!dragged && el.getAttribute("data-state") === "side") {{ note(); go(i); }}
      }});
    }});

    var dx0 = 0, dy0 = 0, dragging = false, dragged = false;
    track.addEventListener("pointerdown", function (e) {{
      dx0 = e.clientX; dy0 = e.clientY; dragging = true; dragged = false;
    }});
    track.addEventListener("pointermove", function (e) {{
      if (!dragging || dragged) return;
      var dx = e.clientX - dx0, dy = e.clientY - dy0;
      if (Math.abs(dx) < DRAG_THRESHOLD || Math.abs(dx) <= Math.abs(dy)) return;
      dragged = true;
      if (dx < 0) next(); else prev();
    }});
    ["pointerup", "pointercancel", "pointerleave"].forEach(function (t) {{
      track.addEventListener(t, function () {{ dragging = false; }});
    }});

    if (!reduced) {{
      setInterval(function () {{
        if (hovered) return;
        if (Date.now() < pauseUntil) return;
        go(active + 1);
      }}, AUTOPLAY_MS);
    }}
    render();
  }});
}})();
</script>
"""

    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(page)
    print(f"wrote {OUT}  ({OUT.stat().st_size / 1024 / 1024:.2f} MB, {len(cache)} assets embedded)")


if __name__ == "__main__":
    main()
