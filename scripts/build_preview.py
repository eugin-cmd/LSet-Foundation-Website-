#!/usr/bin/env python3
"""Build a single self-contained HTML file from the running dev server.

Fetches the rendered page, inlines the real stylesheet, embeds every asset as a
data URI, strips the Next.js runtime and re-adds a small vanilla accordion, so
the result is a faithful snapshot of the app that opens anywhere offline.

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

    asset_re = re.compile(r"/assets/[A-Za-z0-9._-]+")
    css = asset_re.sub(lambda m: data_uri(m.group(0)), css)
    html = asset_re.sub(lambda m: data_uri(m.group(0)), html)
    html = re.sub(r'<link[^>]+(rel="stylesheet"|rel="preload"|\.css)[^>]*>', "", html)
    body = re.search(r"<body[^>]*>(.*)</body>", html, flags=re.S).group(1)

    m = re.search(r"\.([A-Za-z0-9_]*_chevronOpen__[A-Za-z0-9_-]+)", css)
    if not m:
        sys.exit("Could not resolve the hashed chevronOpen class.")
    chevron_open = m.group(1)

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
  // Accordion — mirrors components/Pillars/Pillars.tsx
  var CHEVRON_OPEN = {chevron_open!r};
  var triggers = Array.prototype.slice.call(
    document.querySelectorAll("[data-accordion] button[aria-controls]")
  );

  triggers.forEach(function (trigger) {{
    trigger.addEventListener("click", function () {{
      var wasOpen = trigger.getAttribute("aria-expanded") === "true";
      triggers.forEach(function (other) {{
        var open = other === trigger && !wasOpen;
        other.setAttribute("aria-expanded", String(open));
        var panel = document.getElementById(other.getAttribute("aria-controls"));
        if (panel) {{
          // Mirrors Pillars.tsx: data-open drives the eased height, inert keeps
          // the collapsed copy out of the tab order.
          panel.setAttribute("data-open", String(open));
          if (open) panel.removeAttribute("inert");
          else panel.setAttribute("inert", "");
        }}
        var chev = other.querySelector("span[class*='chevron']");
        if (chev) chev.classList.toggle(CHEVRON_OPEN, open);
      }});
    }});
  }});
}})();
</script>
"""

    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(page)
    print(f"wrote {OUT}  ({OUT.stat().st_size / 1024 / 1024:.2f} MB, {len(cache)} assets embedded)")


if __name__ == "__main__":
    main()
