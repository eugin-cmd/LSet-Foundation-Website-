# LSeT Foundation — Website

Homepage implemented from Figma
[`LSET Foundation Website` → `Desktop - 4`](https://www.figma.com/design/A3JKD1OGDcO97mQch4i2BE/LSET-Foundation-Website?node-id=1930-10054)
(1440 × 6134).

## Run

```bash
npm install
npm run dev      # http://localhost:4321
npm run build
```

## Stack

Next.js 15 (App Router) · React 19 · TypeScript · CSS Modules. No CSS framework —
Figma variables and text styles live in [`app/tokens.css`](app/tokens.css) and
[`app/globals.css`](app/globals.css) as custom properties and `wf-*` type utilities.

Fonts (Google Sans Flex, Google Sans, Inter, Inter Tight) load from Google Fonts in
[`app/layout.tsx`](app/layout.tsx).

## Section map

Page order in [`app/page.tsx`](app/page.tsx), with the Figma y-offsets each section reproduces:

| Component | Figma node | y | height |
|---|---|---|---|
| `Hero` (+ `NavBar`) | `1930:10055` | 0 | 780, full-bleed |
| ~~`IntroBand`~~ | `1930:10056` | — | not rendered; its copy moved into the hero |
| `Approach` | `1930:10058` | 1017 | 1452 |
| `Pillars` | `1930:10062` | 2469 | 913 |
| `CtaBand` | `1930:10086` | 3382 | 1109 |
| `PartnersStrip` | `1930:10099` | — | now a band under the hero, logos inverted to black |
| `ProofWall` | `1930:10093` | 4491 | 2x viewport track; 5 cards on a scroll-driven arc |
| `SiteFooter` | `1958:11249` | 5656 | 478 |
| `NavDrawer` | `1959:12496` | — | opens from the What We Do nav pill |

## The education page — Figma `Desktop - 5`, node `1962:12731`

`/education`, linked from the EDUCATION brand chip. Section map:

| Component | Figma node | Notes |
| --- | --- | --- |
| `EducationHero` | `1962:12732` + `1962:13225` | Figma's 856px band and its title at y 660 (77.1%) are both departed from: the band takes the shared `--banner-height` so it matches the Foundation hero, and the copy is centred in it |
| `IntroBand` | `1962:12733` | the homepage's unrendered band, finally used |
| `EducationStatement` | `1962:12736` | 1050px photo over a 402px deep block, copy across the join |
| `EducationPillars` | `1962:18119` | reuses the homepage accordion |
| `EducationShowcase` | `1962:18246` + `1962:18205` | second band, framed photo overhanging the join |
| `EducationCourses` | `1962:12752` + `1965:21318` | three cards on a rail, then the partner strip |

- **The accordion was extracted, not duplicated.** `Pillars` split into
  `Pillars/Accordion.tsx` (the numbered rows, taking `items` and `defaultOpen`) and
  `Pillars.tsx` (the overhanging photo plus that accordion). Both pages get the same
  markup, easing and measurements from one place.
  - `Pillars.tsx` needs `"use client"`. It passes icon *components* to `Accordion`,
    which is itself a client component, and function references cannot cross a
    server boundary — without the directive the homepage 500s with "Functions
    cannot be passed directly to Client Components". The directive lived there
    before the extraction, because Pillars used to hold the accordion's state.
- **`NavBar` takes an `active` brand.** Figma gives the education frame a white chip
  with teal text where the homepage frame has a translucent one with white text.
  The single treatment is deliberate: a bar that changes style between pages reads
  as a bug. The chips are real links now — `/` and `/education`.
- **The band photographs are node exports**, each with that node's two scrim
  gradients already composited in, as on the homepage. Do not layer gradients over
  them. The hero and both statement bands are windows onto one 1225x4096 source, so
  each band is exported separately rather than shipping the tall original three
  times: 4.6MB of PNG each became 169-193KB of JPEG.
- **`.showcaseFrame img` needs `max-width: none`.** Figma's inner container is
  39.69px wider than the 606.072px frame and is clipped by it (6.55%); the global
  `img { max-width: 100% }` was silently capping it back to the frame width and
  cancelling the bleed. Verified rendered: frame 606.1, image 645.8.
- **The course cards are the Proof Wall's construction** — 457.183 x 304.789, one
  photo behind the whole card, an uncovered media area, then the body. Figma puts a
  bottom gradient on card 02 only, but the body copy sits straight on the photograph
  in all three, so all three get it.
- **The two pages are linked in four places**, all verified by clicking through in
  both directions: the nav brand chips (`/` and `/education`), the nav logo, the
  footer's "Education" under WHAT WE DO, and the homepage drawer's and pillars'
  Education rows. The footer is on every page, so its links carry both ways.
  - **In-page anchors in the nav have to be absolute.** "The Work" was `#the-work`,
    which is dead on `/education` because that section only exists on the homepage.
    It is `/#the-work` now. The drawer's **Conservation** row is the Foundation's
    own arm, so it points at `/` — it had been a bare `#conservation` with no target
    on either page. Technology is still a bare hash: ANTZ SYSTEMS has neither a page
    nor a section yet.
- **`build_preview.py` now takes a route**: `build_preview.py <out.html> [route]`.
  It also reads the real `<title>` out of the fetched page instead of hardcoding the
  homepage's, so each snapshot is named for its own route.

### Known copy gaps on the education page

- The statement reads "WE TRAIN. WE IMMERSE.**WE** MENTOR." in Figma — no space after
  the second full stop. Reproduced verbatim.
- The partner label reads "**n** association with leading partners" — the leading
  "I" is missing in Figma. Reproduced verbatim.
- Figma leaves accordion rows 01 and 03 collapsed and supplies no body copy for
  them, exactly as the homepage's board does. Both carry placeholders, flagged in
  `components/Education/education.data.ts`.
- The Avian Society of India logo is dark navy on transparent and sits on the
  `#05150c` band, where it is barely legible. Figma's own render has the same
  problem, so it is reproduced rather than fixed — it wants a light-on-dark version
  from the partner.

## The banner blinder

`components/Blinder/` opens over both banners on load — the homepage hero and the
education hero.

- **Measured off `div.transition` on aquamaremarine.com**, not guessed: a `position:
  fixed`, `z-index: 9999` grid of 48 full-width horizontal slats, each 1440x72px in
  a solid `rgb(18,34,35)`, with `transform-origin: 720px 72px` (centre-x, its own
  bottom edge) and a transform of `matrix3d(1,0,0,0, 0,0,1,0, 0,-1,0,0, 0,0,0,1)` —
  rotateX 90deg, edge-on and so invisible. A venetian blind: the slats swing about
  their own edge. The overlay is `display: none` at rest because JS hides it after
  the transition.
- **What is ours, and why.** The reference's animation never ran in a headless
  browser — no inline-style mutations, no CSS keyframes, no `Element.animate` calls
  anywhere in the first screen, with reduced-motion confirmed off. So the structure
  is theirs and the *timing* is mine: 760ms per slat on `cubic-bezier(0.33, 0, 0.2,
  1)`, staggered 55ms top-to-bottom, 1365ms in total. It also covers the banner
  rather than the viewport, since the ask was for the banners.
- **12 slats, not 48.** At 12 rows each slat is ~65px on the 780px home banner and
  ~65px on either banner now that both are --banner-height, against the reference's
     fixed 72px.
- **Pure CSS**, so it runs on load with no script and survives the static export,
  which strips every `<script>`.
- **The keyframes fade out over the last 15%, and that is not decoration.** A slat
  rotated to 90deg is edge-on, but under perspective its far edge still projects a
  thin wedge: measured, the open slats left dark slivers over **10.69%** of the
  banner. The reference removes its overlay with JS, which the export cannot do, so
  each slat has to remove itself. By 85% it is within 13deg of edge-on, so the fade
  is imperceptible as one. Verified: the settled banner now differs from a banner
  with the blinder deleted by **0 pixels**, on both pages.
  - Measuring that needs every *other* animation frozen first. A first attempt
    compared the settled banner against a later capture and reported 53,992
    differing pixels centred on the headline — that was the hero's 9s iridescence
    animation having moved on, not the blinder.
- Skipped entirely under `prefers-reduced-motion: reduce`, where the slats are
  simply already open.
- It sits above everything in the banner (`z-index: 5`) so the whole thing is
  revealed at once, and is `pointer-events: none` throughout. The hero's tech icons
  still drop in on their original 220-490ms delays, so they have landed by the time
  the lower slats open.

## Notes carried over from the design

- **The hero is video.** `hero.mp4` (1920 × 1080, 10.2s, ~3.0 MB at 2.4 Mbps) is transcoded
  from `References/close-up-of-orangutan-in-the-jungle-2025-12-17-14-37-11-utc (1).mp4`
  (3840 × 2160, 76 MB). Rebuild with `avconvert --preset Preset1920x1080` then the
  bitrate/audio-stripping pass — see the video notes below.
  `hero-poster.jpg` is its first frame, used as the `poster` and as the
  `prefers-reduced-motion` fallback. Unlike the stills, the footage has **no baked-in scrim**,
  so the Figma node's two gradient fills are reproduced in CSS in
  [`Hero.module.css`](components/Hero/Hero.module.css) — without them the white nav and
  headline are unreadable over bright frames.
- **The other two section backgrounds are Figma node exports.** `approach-bg.jpg` and
  `cta-bg.jpg` are crops of one 1440 × 4090 source photo, each with the node's two scrim
  gradients already composited in. Do not add CSS gradients on top of these two — it
  double-darkens. To change a scrim you re-export from Figma.
- **The overhanging field photo** sits in `Pillars` at `top: -615px`, matching Figma's
  parenting, so it laps over the deep-green block of `Approach`.
- **The proof rail runs off the right edge** by design — Figma places a 1439.5px card
  rail at x 226.77. That inset survives only because `.wheel` also carries a matching
  `scroll-padding-left`: mandatory snapping otherwise fires on load and pulls card 1
  flush to the scrollport edge.
- **The hero banner is full-bleed** — `--banner-height` (780px at 1440) with no
  gutter and no radius. Chosen after comparing it against an inset, rounded
  variant behind a toggle: the page's three other dark photographic bands run
  edge to edge, so framing only the hero treated like objects unlike, and the
  floating nav plate already supplies the inset character at the top. The hero
  section is exactly the banner's height, and the hero parallax range is derived
  from that token so the two cannot drift apart.

- **Type** — `WF/Display XL` and friends use `clamp()` (52 → 28px for the display
  size), and every letter-spacing is in `em` so tracking scales with the size
  instead of staying at a fixed px value.
- **`--edge`** is the page-edge inset (24px at desktop, tightening to 16px), used
  by every full-bleed section.
- **Fixed heights became ratios.** The approach photo block uses
  `aspect-ratio: 1440/1050`; the absolute overlays that sat at `top: 624px` etc.
  are now percentages of their section, so they hold position as heights go fluid.
- **The overhanging pillars photo** is anchored by its own bottom edge
  (`top: 81px; translate(-50%, -100%)`) rather than a fixed `top: -615px`, so the
  81px overlap survives at any size.
- **The approach section is tightened** from Figma's 1050 + 402 to 860 + 150 at
  1440, which also shortens the parallax range so the effect reads more. The
  overhanging photo's width is tied to `66.81vw` (Figma's 962px at 1440) rather
  than only capped at 962px: capped, it held a 696px height while the shorter
  section shrank around it and ran into the heading between ~1000 and 1440px.
- The canopy is **defocused** (`--bg-blur: 3px`) so it reads as a far plane.
  A blurred layer fades at its own edges and `.bgArea` clips it, so `.bg` is
  grown by `--bg-bleed` (3x the radius) on every side *on top of* the vertical
  overscan the drift consumes — otherwise the faded edge shows as a translucent
  band letting the section's dark green through.
- The canopy carries a flat **25% black** layer (`.bgTint`), held still while the
  image drifts beneath it. It also lifted the heading's backdrop from a mean
  luminance of 119 to 100.
- **The approach section parallaxes.** Its backdrop sinks while the heading and
  the overhanging photo rise — about 318px of separation between the text and
  the backdrop across the section's passage — on a **named** view timeline
  (`view-timeline-name: --approach-view`) rather than a bare `view()`: the
  backdrop sits inside a clipping wrapper, and an anonymous `view()` there is
  measured against that clipped box and never advances. `timeline-scope` on
  `main` puts the name in reach of the photo, which belongs to the composition
  but is a child of the pillars section, so the text and photo move in lockstep.
- **The proof wall moved from absolute offsets to flow** — its paddings and gap
  reproduce Figma's 59 / 256 / 830 positions at 1440. The card rail is an
  `overflow-x: auto` scroller with scroll snapping, so the third card stays
  reachable on narrow screens instead of just being clipped.
- **The proof cards ride a scroll-driven arc**, matching the requested reference
  (the "complete partner" section on aquamaremarine.com). Every card is mounted at
  the top of one shared circle and rotated about that circle's centre, so it rises
  from off-screen bottom-right, levels at the crest and sinks away bottom-left.
  All five run the same `+30deg -> -30deg` sweep on an ease-in-out-cubic; consecutive
  cards are offset by 11.94% of that sweep, which is what puts three cards on screen
  at `-16.8 / 0 / +16.8` degrees. Those figures are measured off the reference, which
  at 1440x900 uses r = 2160px (1.5x the viewport width), a 384px card (26.67%) and a
  30deg limit — reproduced here as ratios of a `--pw-w` that stops growing at 1600px.
  Card i's window follows from holding the 11.94% offset while pinning card 1 to
  `cover 0%` and card 5 to `cover 100%`: `w = 100 / (1 + 0.1194 * (n - 1)) = 67.68%`,
  step `8.081%`. With the track at twice the stage height, all five crests land inside
  the pin. It is pure CSS (`view-timeline` + per-card `animation-range`), so it also
  survives the script-stripped preview snapshot.
- **The nav CTA is the `inverse` PillCta variant** — a white pill with green text
  that wipes to the green fill on hover, which is `a.btn-cta` on antzsystems.com with
  its two layers swapped (theirs is green wiping to white). Measured off that button:
  an overlay carrying a second copy of the label, clipped to
  `inset(27.5% 50% round <pill>)` — 50% left and right meet, so a zero-width sliver
  across the middle — and scaled 1.5x; on hover the clip opens to `inset(0)` while
  the scale settles to 1, so the fill rushes outward from the centre and the label
  lands as one label changing colour along the wipe edge.
  - **Two deliberate departures from the reference, both for the same reason.** The
    reference scales its overlay 1.5 -> 1 while clipping it, which scales the
    overlay's copy of the label too — so through the reveal the two labels are
    different sizes and never line up. Rendered frame by frame it reads
    "Get n touch", "Gt in tocch". It gets away with that because its clip curve,
    `cubic-bezier(1, 0, 0, 1)`, sits still for half its 400ms and then crosses the
    whole range in ~70ms: the mismatch is a blink. Slowed down at all, the garbled
    text is plain. So (1) the scale moved to the pill, where it applies to both
    layers at once and registration holds, and (2) the clip got an ordinary ease it
    can be seen to travel. Verified by freezing the clip at eight progress values
    and rendering each: every frame reads "Get in touch" with the glyphs continuous
    across the boundary.
  - Do not put `transition: none` on `.inverse:hover` — it outranks the pill's
    transform transition and silently kills the scale on the way in.
  - The overlay label is `aria-hidden`; the static `.label` is the accessible copy.
  - The variant drops the 1px border and adds that pixel back to the padding, so the
    outer box is byte-identical to the solid variant (118.5px either way). The border
    had to go because the overlay's `inset: 0` resolves against the *padding* box, so
    with a border in place the pill's own white ground stayed visible as a 1px ring
    around the green once the wipe settled.
  - Both callers use `inverse`: the nav's "Get in touch" and the CTA band's
    "Book a demo", which was asked to match it exactly. Verified property by
    property — ground, text, radius, border, padding, type, overflow, isolation,
    height and the whole wipe layer all identical; only the widths differ
    (118.5 vs 123), because the labels do. `solid` now has no caller and is kept
    only as the Figma default.
  - It also helps the band: a white pill reads far better on the bright canopy
    than the dark green one did.
- **"The Work" scrolls to the Proof Wall**, which carries `id="the-work"`. The nav
  links now hold real hrefs in the data rather than all being `#`.
  - **`scroll-margin-top` has to differ by layout.** The nav plate floats over the
    page (87px: a 63px row plus its own 12px padding), so a jump would land the
    heading underneath it — hence a base
    `calc(var(--nav-offset) + 87px + 16px)` on the section. But in arc mode the
    stage pins exactly when the section's top edge reaches the viewport top, so
    stopping short would leave the arc un-pinned; the arc block resets it to 0 and
    the pinned stage's own `padding-top` does the clearing instead. Verified the
    kicker clears the plate in both: +23px pinned, +75px in the rail, +57px on a
    phone.
- **The nav drawer** (`1959:12496`) opens from the **What We Do** nav pill, which is
  what its own label column reads. That pill is the checkbox's `<label>`; FOUNDATION
  is a plain link again. Notes:
  - The Figma node contains the nav row as its *first child*, because there the
    header and the drawer are one white block with a `border-top` above the logo.
    Here the nav is a floating rounded plate over the banner, so this component is
    the node's `drawer-inner` only, and the panel hangs 8px below the plate at the
    same width, fully rounded to match. Figma's border-top has no equivalent — the
    plate/panel boundary is carried by the colour change.
  - `--nav-row-h`, `--nav-cta-h`, `--nav-cta-inset` and a new `--plate-w` moved from
    `.nav` up to `.sticky`, so the panel sizes itself to the plate from the same
    numbers rather than a second copy of them. Verified both at 1300.5px.
  - Figma reserves an empty 46px `chip-row` under the last destination
    (`1959:12514`). The space is kept as `padding-bottom`; the empty element is not.
  - **The destination numbers use `font-variant-numeric: tabular-nums`.** With
    proportional digits "01" measured 13.3px against 15.1 and 15.2 for "02" and
    "03", and because the row is a flex with a fixed gap that pushed every title to
    a different x — Conservation sat 1.8px left of the other two. Tabular figures
    give all three the same advance (16.4px), so the titles are flush. The numbers
    also carry `margin-top: 1.5px`: the two sizes' line boxes top-align exactly but
    their ink does not, the 11.5px number having less half-leading above its caps
    than the 30px title, so its cap-top sat ~1.5px high. Both measured by pixel ink
    extents, not by line box — and note the capture scale there is the clip's
    `scale` *multiplied* by `deviceScaleFactor`, which is easy to get wrong by 2x.
  - **Panel padding is a uniform 40px**, so the promo card — the tallest column, and
    therefore the one that sets the panel's height — is inset equally top, right and
    bottom (measured 40/40/40 at 1440 and 1280). Figma's own sides and bottom are
    40px; the top was 21px, derived to land the node's 41px gap from the nav row,
    which the plate's 12px inset now takes to 52px instead. Even margins won.
  - **CSS-only, like the burger** — a checkbox is the control and `:checked ~` opens
    it, because the shared snapshot strips every script. The checkbox is visually
    hidden but *not* `display: none`, so the chip stays keyboard-reachable, and
    `visibility: hidden` keeps the closed panel's links out of the tab order
    (verified: focusing one leaves `activeElement` unchanged).
  - **The scrim needs `pointer-events: auto` explicitly.** `.sticky` sets `none` for
    its whole subtree so the zero-height bar cannot swallow clicks on the hero;
    without the override the click-catcher inherits it and outside-click never
    closes the drawer.
  - The promo photo's crop is `object-position: center 32%`. Figma does not expose
    the fill's own transform, and the source is a tall portrait, so the crop was
    chosen to keep the heron's head in a 278x130 box.
- **The circular reveal starts and ends on the pill.** `clip-path: circle()` centred
  on `68% -43px`: the What We Do pill's measured centre, 68.0-68.2% across the panel
  across widths and a constant 43.3px *above* its top edge, since the plate's bottom
  inset lies between them. **Re-measure the x whenever the nav's link list changes** —
  the row is `space-between`, so adding or removing an item moves the pill; dropping
  "From the Field" shifted it from 61% to 68%, which would otherwise have left the
  circle blooming ~91px to the pill's left. The 43.3px is a property of the plate, so it did not move
  when the trigger changed from the FOUNDATION chip to this pill — only the x did. The negative y puts the origin outside the box,
  which `clip-path` allows. The panel butts the plate (`margin-top: 0`), which is as
  close under the pill as it can start — pulling it up behind the plate would show
  white through, because the plate's ground is fully transparent until the page
  scrolls. 480ms `ease-in` open as asked, 300ms `ease-out` close, one origin for
  both, and `visibility` flips at the *end* of the close so the panel stays visible
  while it shrinks and leaves the tab order the moment it is gone.
- **`--drawer-hidden` is 38px, not 0.** With the origin 43.3px clear of the panel,
  any radius under that reveals nothing, so a 0 start would spend the first stretch
  of the ease-in travelling invisibly. 38px leaves 5px of margin. Verified by a
  differential render against a 0px radius — 0 differing pixels, with a 60px control
  showing 15,163, so the test detects leaks rather than passing vacuously. **Freeze
  the hero video before any such diff**: the first attempt compared frames of playing
  footage and reported every pixel as different.
- **Below 1180px the pill moves inside the burger menu**, so the measured desktop
  origin no longer describes it and the reveal falls back to the panel's top-left
  (`20% 0%`, resting radius 0). Open it by tapping the burger first, then What We Do.
- **The pillar rows carry line-art icons** beside their numbers — a leaf, an open
  book and three linked nodes — stroked in `currentColor` from `.indexRow`, so the
  icon and the number take their colour from one declaration. Stroke is set in the
  CSS rather than on the svg, matching the hero's icon row. The mapping hangs off a
  new `key` on each pillar rather than its `title`, so re-wording a heading cannot
  silently drop an icon.
  - Conservation started as a paw print, which is the better idea for a wildlife
    charity but does not survive the size: four outlined toes in a 20px box leave
    each ring ~3px across against a 1.6px stroke, so the stroke all but fills them
    and they merge into a lump. Checked by rendering at true 1x and magnifying the
    actual pixels — at 4x it looked fine, which is the trap. Three large forms read
    cleanly instead.
  - Technology is nodes, not another chip: the hero's AI mark is already a processor
    with pins.
- **The hero's leaf flourish** under the subtext is `References/leafs.svg`, inlined as
  a component rather than loaded as a file so it inherits `currentColor` like the
  hero's other marks and costs no extra request or data URI in the static export. The
  source's hardcoded `fill="white"` is swapped for `currentColor`; size comes from CSS
  (68px against the artwork's native 114), so the viewBox is the only geometry in the
  component. It replaced a straight 90px rule, which in turn replaced a wavy one.
- **The CTA band's photograph is `white-bellied heron.png`** from `References/`,
  exported to `/assets/cta-heron.jpg`: composited over `--scrim-base` first (the
  source is RGBA, though only 0.03% of it is semi-transparent) and resized from
  2880x2806 to 1920 wide — 8.2MB of PNG down to 424KB of JPEG. Positioned
  `center 28%`, because the source is nearly square while the layer is wider than
  tall, so `cover` trims top and bottom. `cta-bg.jpg` is now unreferenced but left
  on disk.
  - The drone operator's head is cropped and cannot be recovered by position alone:
    the parallax overscan already eats 120px off the top of the layer, so even
    `center top` starts below him. The drone itself reads, and the heron is whole.
- **The CTA band needs a 35% tint, and the number is measured.** The heron photo runs
  to near-white over the shingle and the river, where white type measured **1.16:1**
  at its brightest and 2.15:1 across its worst 5% — unreadable, and far worse than
  the orangutan export it replaced (~2.5:1). At 30% the headline cleared 3:1 but the
  subtext stalled at 4.21-4.38 against 4.5; at 35% every run passes at the worst 5%
  (headline 4.97-6.86, subtext 4.73-7.41, medians 11-16:1). Band-sized and `inset: 0`
  so it holds still while the photo drifts beneath it, as in Approach.
- **The CTA band's copy is vertically centred and parallaxed**, not at Figma's
  716 / 1109 (64.56%). The band is flex-centred rather than positioning the copy at a
  percentage, so the copy needs no centring transform and `transform` stays free for
  the parallax. The copy rides up 176px while the photo sinks 120px — 296px of
  relative motion across the band's passage. The photo layer is grown by
  `--cta-overscan` on both edges and swings +/- half of it, so it keeps 60px of
  coverage past the band at both extremes; swinging the full +/- overscan would land
  its edge exactly on the band's and leave nothing for sub-pixel rounding.
- **Known: the centred copy sits on bright canopy.** Off the export's baked top
  scrim, white type measures 8.8:1 / 8.3:1 / 7.9:1 median behind the two title lines
  and the subtext, but the brightest patches fall to ~2.5:1 — under the 3:1 large-text
  minimum — and the subtext's worst 5% is 3.9:1, under the 4.5:1 body minimum. It
  reads on average and the parallax keeps drifting it across different patches, so
  the worst case is transient. Fixing it means either a soft scrim behind the copy
  block (note the warning above about double-darkening this export) or a text-shadow.
- **The whole proof card is one link.** The anchor is the card's layout column
  (`<article> > <a class="cardHit">`), which gives one hit target and one tab stop
  and makes the photo clickable, not just the CTA. The usual trick — a stretched
  `::after` on the "View project" link — does not work here: `.cardBody` is itself
  positioned to sit above `.cardBg`, so the overlay would stop at the body and
  never cover the photo. The CTA is a `<span>` now (an `<a>` inside an `<a>` is
  invalid) and underlines off `.card:hover`. Each anchor carries an
  `aria-label` naming its species, since five identical "View project" links
  would otherwise be indistinguishable in a screen reader's link list.
- **Hover pops the card** — `scale(1.045)` on a bezier that overshoots 1
  (`cubic-bezier(0.34, 1.35, 0.64, 1)`), which is what makes it read as a pop
  rather than a grow. It is mirrored on `:focus-within` so keyboard users get the
  same affordance. Against `surface/darker` a drop shadow alone barely reads, so
  the depth is carried by a faint rim light as well. In arc mode the scale is
  composed onto the centring translate so a tilted card pops straight out of the
  arc. The rail needs `padding-block` with a cancelling negative `margin-block`,
  because an `overflow-x: auto` scroller clips vertically too and would cut the
  pop off — verified it adds no vertical scrollbar and leaves the Figma
  heading-to-card gap (101px at 1440) untouched.
- **`.proof` uses `overflow: clip`, not `hidden`** — `hidden` would make it a scroll
  container and the arc's sticky stage would have nothing to stick to.
- **The arc is gated to >= 1000px wide, >= 640px tall, and no reduced-motion request.**
  Outside that the Figma rail is what renders: the arc is layered on top of it, never
  the other way round, so there is no state where cards sit invisible waiting for a
  timeline. Below 1000px the card would shrink past reading size, and a two-viewport
  pin is the wrong trade on a small screen.
- **Arc cards are 384px, 84% of the Figma 457.183** — so the display type and body
  padding scale with them. At full size "BROAD-TOOTHED" is 4px wider than the column
  and breaks at the hyphen. Body copy keeps its designed size so it stays readable.
- **The hero's four tech icons** (drone, sensor, acoustic recorder, AI chip) drop
  in on load with a staggered two-bounce settle. Per-keyframe easing gives the
  fall a gravity curve and decays each rebound; a single timing function across
  the whole animation reads mechanical. Runs once, and is off under
  `prefers-reduced-motion`.
- **The scroll cue** is `--color-orange-bright` (#FA6140, brighter than Figma's
  Color/Orange/Default), bounces gently at rest, radiates a ring on hover from a
  pre-existing `::after` rather than one created on the fly, and links to
  `#partners` — the trust band below the hero. All of it stops under
  `prefers-reduced-motion`.
- **The pillars accordion eases open** via `grid-template-rows: 0fr -> 1fr`,
  which reaches the panel's natural height without measuring it and cannot
  overshoot the way a `max-height` guess does. The panel stays in the DOM (a
  `hidden` toggle flips `display`, which is not interpolable) and uses `inert`
  when collapsed to stay out of the tab order and the accessibility tree.
- **The nav collapses at ≤1180px** into a disclosure panel. It is deliberately
  **CSS-only** (a hidden checkbox plus `:checked ~ .groups`) because the static
  preview strips all scripts — a JS menu would work locally and be dead in the
  shared link. On wide screens the wrapper is `display: contents`, so the
  desktop `space-between` row is untouched.
- **The footer columns** are `repeat(auto-fit, minmax(180px, 1fr))`, so four
  columns become two then one.

- Mobile hero: the banner grows to 640px and the copy block centres *below* the
  collapsed nav, since the reflowed lede is much taller than at desktop.

## Course card overlay

Each course card carries a flat 25% black over its photograph, added as the
background-*colour* of `.cardBg::after` rather than as a second element:

    background:
      linear-gradient(180deg, rgb(0 0 0 / 0%) 34%, rgb(0 0 0 / 62%) 100%)
      rgb(0 0 0 / 25%);

A colour can only be the last value in the `background` shorthand, and that is exactly the
order wanted — the colour paints beneath the gradient, so the tint darkens the photo and
Figma's scrim then composites on top of the result.

Measured on the region above 34% of the card, where that gradient is fully transparent and
the tint is therefore isolated: median pixel ratio **0.7500**, 24.9% darker. Across the
whole card it is 22.3%, lower only because the lower third was already scrimmed. Card-body
backdrop contrast goes from 17.58:1 median / 2.40:1 worst-5% to 18.62:1 / 2.63:1 — the
worst case is a bright patch of the photograph behind the description, pre-existing and
slightly improved.

**The Proof Wall's cards do not have this**, so the two are no longer identical in
treatment even though their motion now is.

## Where "The Work" lands

`#the-work` sits on the Proof Wall section, and inside the arc block that section carries
`scroll-margin-top: -82.4svh` — **negative**, so an in-page jump lands *past* its top edge
and part-way into the pin.

Landing on the top edge put the timeline at 20.8%, which is the point where card one is 26%
visible at the right margin and cards two to five are still parked off-stage: "The Work"
arrived at an almost empty stage. Sweeping the timeline, 38% is where cards one and two are
both 100% visible and three is entering at 32%.

The offset is derived rather than dialled in. Progress `p` corresponds to
`scrollY = (sectionTop - V) + p*(H + V)`, so the offset past the section's top edge is
`p*(H+V) - V`; with `H = 380svh = 3.8V` that reduces to `V*(4.8p - 1)`, and p 0.38 gives
**82.4svh**. Expressed in viewport units, so it holds at any viewport height — the track is
in svh too. Verified at 1440x700, 1440x900, 1440x1100, 1920x900 and 1280x800: every one
lands at exactly 38% with the first two cards at 100%.

Recompute this if the track height changes: the `4.8` in that expression is `(H/V + 1)`.

The base layer keeps its positive `scroll-margin-top` (nav-plate clearance) — there is no
pin to land inside of when the rail is a plain scroller, and nothing anchors into the
education page's courses arc, so it is left alone.

## Courses arc

The courses cards use the Proof Wall's scroll-driven wheel, ported into
`Education.module.css`. Same two-layer build: the base layer is the Figma rail — a
horizontal snap scroller — and that is what ships to browsers without scroll-driven
animation, to viewports under 1000x640, and to anyone asking for reduced motion. The arc is
layered on top behind `@supports (animation-timeline: view())` and the same media gate.

Verified identical to the Proof Wall at 1440x900: 1800px track, sticky 900px stage, 133px
stage padding-top, 384px card layout width, 23px body padding, 31.968px title,
`cubic-bezier(0.65, 0, 0.35, 1)`.

**The stagger had to be solved, not copied.** How tightly the cards pack is set by the
*ratio* `offset/span`, not by either figure alone. Three cards must also satisfy
`2*offset + span = 100`, or the last one stops early and the tail of the pin has nothing
moving. Solving both against the Proof Wall's ratio (8.081/67.68 = 0.1194):

    offset = 0.1194 * span,  2*offset + span = 100   ->   span 80.72%, offset 9.64%

so the ranges are 0-80.72%, 9.64-90.36%, 19.28-100%. Each card then crosses its 60deg over
80.72% of the pin rather than 67.68%, so the track is shortened by the same ratio —
`200 * 67.68/80.72 = 168svh` — which keeps the scroll distance per card identical to the
Proof Wall's (135.6svh against its 135.4svh) instead of making the swing 19% slower, and
takes 32svh off the section as a bonus.

Measured at mid-travel, 1440x900: adjacent courses cards sit **16.96deg / 630px apart**,
which is exactly the Proof Wall's two central pairs (16.95deg and 16.97deg, 630px each).

### Rotation speed, scroll resistance, and the +viewport trap

Both tracks are long deliberately: the swing is fixed at 60deg, so track length is what
slows the rotation rather than flattening the arc, and the pin is also where the scroll
resistance comes from — the stage holds still while the cards turn. Proof Wall **380svh**,
courses **302svh**.

Measured at a 900px viewport:

| | track | peak deg/100px | pin holds for | scroll per card |
|---|---|---|---|---|
| original | 200 / 168svh | 9.26 | 100 / 68svh | 1827px |
| first slowdown pass | 260 / 202svh | 7.75 | 160 / 102svh | 2193px |
| **now** | **380 / 302svh** | **5.83** | **280 / 202svh** | **2924px** |

37% slower than the original, and the two pages match to 0.2% (5.83 and 5.84 deg/100px,
2924px and 2920px per card).

Two figures here are easy to get wrong, and both were, so they are worth stating:

- **The slowdown is not the track ratio.** `cover` spans the section PLUS a viewport, so the
  timeline is `(H + 100)svh`. 200 -> 380 stretches it 300 -> 480, i.e. 1.60x — not the 1.90x
  the heights suggest. The first pass assumed the ratio held and claimed 23% against a
  measured 16.3%.
- **Parity between the two arcs is not the span ratio either.** 0.8385 (= 67.68/80.72) would
  put the courses track at 319svh, which measures ~5% slower than the Proof Wall rather than
  equal. Parity solves `span_c * (Hc + V) = span_p * (Hp + V)`: in svh,
  `0.8072 * (302 + 100) = 0.6768 * (380 + 100) = 325svh` per card.

The pin durations differ (280svh against 202svh) and that is correct — the per-card rotation
*rate* is what is matched, and the courses arc simply has three cards to get through where
the Proof Wall has five.

## Course card overlay

Each course card carries a flat 25% black over its photograph, added as the
background-*colour* of `.cardBg::after` rather than as a second element:

    background:
      linear-gradient(180deg, rgb(0 0 0 / 0%) 34%, rgb(0 0 0 / 62%) 100%)
      rgb(0 0 0 / 25%);

A colour can only be the last value in the `background` shorthand, and that is exactly the
order wanted — the colour paints beneath the gradient, so the tint darkens the photo and
Figma's scrim then composites on top of the result.

Measured on the region above 34% of the card, where that gradient is fully transparent and
the tint is therefore isolated: median pixel ratio **0.7500**, 24.9% darker. Across the
whole card it is 22.3%, lower only because the lower third was already scrimmed. Card-body
backdrop contrast goes from 17.58:1 median / 2.40:1 worst-5% to 18.62:1 / 2.63:1 — the
worst case is a bright patch of the photograph behind the description, pre-existing and
slightly improved.

**The Proof Wall's cards do not have this**, so the two are no longer identical in
treatment even though their motion now is.

## Where "The Work" lands

`#the-work` sits on the Proof Wall section, and inside the arc block that section carries
`scroll-margin-top: -82.4svh` — **negative**, so an in-page jump lands *past* its top edge
and part-way into the pin.

Landing on the top edge put the timeline at 20.8%, which is the point where card one is 26%
visible at the right margin and cards two to five are still parked off-stage: "The Work"
arrived at an almost empty stage. Sweeping the timeline, 38% is where cards one and two are
both 100% visible and three is entering at 32%.

The offset is derived rather than dialled in. Progress `p` corresponds to
`scrollY = (sectionTop - V) + p*(H + V)`, so the offset past the section's top edge is
`p*(H+V) - V`; with `H = 380svh = 3.8V` that reduces to `V*(4.8p - 1)`, and p 0.38 gives
**82.4svh**. Expressed in viewport units, so it holds at any viewport height — the track is
in svh too. Verified at 1440x700, 1440x900, 1440x1100, 1920x900 and 1280x800: every one
lands at exactly 38% with the first two cards at 100%.

Recompute this if the track height changes: the `4.8` in that expression is `(H/V + 1)`.

The base layer keeps its positive `scroll-margin-top` (nav-plate clearance) — there is no
pin to land inside of when the rail is a plain scroller, and nothing anchors into the
education page's courses arc, so it is left alone.

## Courses arc

The courses cards use the Proof Wall's scroll-driven wheel, ported into
`Education.module.css`. Same two-layer build: the base layer is the Figma rail — a
horizontal snap scroller — and that is what ships to browsers without scroll-driven
animation, to viewports under 1000x640, and to anyone asking for reduced motion. The arc is
layered on top behind `@supports (animation-timeline: view())` and the same media gate.

Verified identical to the Proof Wall at 1440x900: 1800px track, sticky 900px stage, 133px
stage padding-top, 384px card layout width, 23px body padding, 31.968px title,
`cubic-bezier(0.65, 0, 0.35, 1)`.

**The stagger had to be solved, not copied.** How tightly the cards pack is set by the
*ratio* `offset/span`, not by either figure alone. Three cards must also satisfy
`2*offset + span = 100`, or the last one stops early and the tail of the pin has nothing
moving. Solving both against the Proof Wall's ratio (8.081/67.68 = 0.1194):

    offset = 0.1194 * span,  2*offset + span = 100   ->   span 80.72%, offset 9.64%

so the ranges are 0-80.72%, 9.64-90.36%, 19.28-100%. Each card then crosses its 60deg over
80.72% of the pin rather than 67.68%, so the track is shortened by the same ratio —
`200 * 67.68/80.72 = 168svh` — which keeps the scroll distance per card identical to the
Proof Wall's (135.6svh against its 135.4svh) instead of making the swing 19% slower, and
takes 32svh off the section as a bonus.

Measured at mid-travel, 1440x900: adjacent courses cards sit **16.96deg / 630px apart**,
which is exactly the Proof Wall's two central pairs (16.95deg and 16.97deg, 630px each).

### Rotation speed, and the +viewport trap

Both tracks were lengthened to slow the rotation without making the arc shallower: the
Proof Wall's from 200 to **260svh**, the courses' to **202svh**. Measured at a 900px
viewport, peak rotation at mid-travel falls from 9.26 to **7.75deg per 100px** — 16.3%
slower — and both pages now read 7.746 and 7.742, with the courses cards sitting at exactly
the Proof Wall's middle three angles (-14.5deg, 3.9deg, 19.1deg).

Two figures here are easy to get wrong, and both were:

- **The slowdown is not the track ratio.** `cover` spans the section PLUS a viewport, so
  200 -> 260svh stretches the timeline by (2340+900)/(1800+900) = 1.20, not 1.30. Assuming
  1.30 would have claimed 23% slower against a measured 16.3%.
- **Parity between the two arcs is not the span ratio either.** 0.8385 (= 67.68/80.72) gives
  218svh, which measured 5.4% slower than the Proof Wall rather than equal. Parity solves
  `span_c * (Hc + V) = span_p * (Hp + V)`: at V 900 that is
  `0.8072 * (1818 + 900) = 0.6768 * (2340 + 900) = 2193px` of scroll per card, i.e. 202svh.

Both sections are correspondingly taller: the Proof Wall by 60svh, the courses arc by 34svh
from its 168.

Two notes on the arithmetic, since it is easy to get wrong twice — I did:

- A first pass used span 67.68% with offset 16.16%. That satisfied the end-at-100%
  constraint but doubled the ratio to 0.239, so the cards sat 25.3deg apart at mid-travel
  and never appeared together. Correct motion, wrong density.
- `60 * offset/span` gives the **average** angular separation, not the instantaneous one.
  The swing is eased (`cubic-bezier(0.65, 0, 0.35, 1)`), so cards mid-progress move faster
  than cards near their ends: the ratio 0.1194 averages 7.16deg but measures 16.96deg at
  mid-travel and 8.3deg out at the edges. The Proof Wall shows both — its central pairs at
  ~17deg, its outer pairs at ~8.3deg. Only its outer pairs actually overlap (292px apart
  against a 384px card); the central ones keep a 246px gap, and so do these.

Two consequences worth knowing:

- The section is now **two viewports taller** while pinned, as the Proof Wall's is. That is
  inherent to the effect, not a side effect.
- The rail gained `margin-block: -30px` / `padding-block: 30px`, which the Proof Wall's has
  and this one did not: the scroller clips vertically, and without it the hover pop and its
  shadow were being cut off.

## Statement band placement

The statement is centred in the band (`top: 50%` plus a `-50%` translate) rather than at
Figma's y 669 of 1452 — 46.07%. That figure did land within ~1px of centre from 800px up,
but only because the photo's `72.92vw` and the deep block's `27.92vw` sum such that 46.07%
of the pair happens to be the middle; it is a coincidence of two clamps, not a rule, and it
broke wherever either clamp saturated. Measured before the change: 39.2px above centre at
700px, 20.3px below it at 390px.

It also carries a parallax, on the band's own `view()` progress like the homepage's approach
and CTA bands: `±var(--statement-lift)` either side of centre, `clamp(24px, 5.5vw, 80px)`,
so it is at the exact centre when the band is mid-viewport. The keyframes repeat the `-50%`
because an animation on `transform` replaces the base transform rather than adding to it.
Verified from 390-1440px: symmetric travel, and the copy stays inside the band at every
sample.

**The band carries a flat 25% black overlay**, `.statement::after`, the same treatment as
the hero's. It sits under the copy: `::after` paints after every child including the
absolutely-positioned copy, so `.statementCopy` takes `z-index: 1` — otherwise the tint
would dim the type it exists to help. Measured on rendered pixels: median pixel ratio
0.7521 against the 0.7500 that 25% predicts, mean luminance 23.9% darker.

**The band was shortened, and finding the right figure took two passes.** The photograph is
a node export with the design's scrim composited in, and the scrim fades to a flat floor of
`rgb(1 18 12)` — which is `--surface-deep`, `rgb(2 19 12)`, to within a unit. That is the
design's intent: the photo fades *into* the deep block, seamlessly. But it only reaches the
floor at image row 1250 of 1400, i.e. box y 937.

| | band | flat below the copy | join |
|---|---|---|---|
| Figma (1050 photo + 402 deep) | 1452px | 673px — 46.3% | seamless |
| deep block trimmed to 140 | 1190px | 411px — 34.5% | seamless |
| photo also cropped to 820 | 920px | 141px — 15.3% | **3.2-unit step** |
| photo cropped to 940, deep block dropped | **940px** | **28px — 3.0%** | none to make |

Cropping to 820 cut the scrim mid-fade at `rgb(11 22 10)`, which is why it stepped against
the block below. Ending the band at 940 instead means its bottom edge *is* the scrim's
resting colour, so the deep block has nothing to do and is gone — `.statementPhoto` is the
band. Largest row-to-row luminance step in the last 160px is now 0.45 units, against 3.22
at the old join.

`background-position` is `center top`, which is what sends the crop to the bottom where the
dead tail is; centred it would have taken half off the top and eaten the subject. Both the
box and the cover scale are width-driven, so the box bottom lands at 89.5% of the image
height at every width against the floor's 89.3%, and the framing never shifts. The 340px
floor stops a phone rendering a photo too short to carry the copy.

Contrast was measured before each cut and through the copy's whole parallax travel, copy
hidden. With the tint: 12.7:1 median at the top of travel, 14.3:1 at rest, 16.3:1 at the
bottom, worst 5% never below 5.6:1 — against 9.8/11.6/14.3 and 3.4:1 without it. So the
overlay bought roughly 1.6x at the worst point, and the cropping cost nothing. My
expectation that a shorter band would push the copy into brighter photograph and hurt
legibility was wrong, and the measurements said so before anything was cut.

The parallax was also strengthened: `--statement-lift` is `clamp(40px, 7.64vw, 110px)`, up
from 80px, and `animation-range` is `cover 15% cover 85%` rather than the full pass. Holding
the last 15% at each end packs the same travel into 70% of the pass, so the copy moves at
roughly 17% of scroll speed instead of 8% — parallax rather than drift — and sits still
while entering and leaving. Verified 390-1440px: symmetric travel, copy inside the band at
every sample.

**The showcase band still has the same defect, and is untouched.** Same construction, and
its photo content ends at y 852 of 1452, leaving **600px, 41.3%, flat**; its overhanging
frame ends at y 853, so nothing occupies that area either. The same treatment applies —
including the lesson above, that the crop has to land on the scrim's floor rather than
wherever the photograph stops being interesting.

## Education row icons

The three rows carry line art in the homepage accordion's style: `CuppedHands` for hands-on
training, `Globe` for multinational faculty, `Birds` for species exposure. Looked up from a
`key` on each row (`EducationRow` in `education.data.ts`), the same pattern Pillars and the
nav drawer use, rather than by array position.

`EducationPillars` needed `"use client"` for this. Accordion is a client component and these
are passed to it as component *references*, which cannot cross a server-to-client boundary —
`Pillars.tsx` carries the directive for exactly the same reason.

**The drop animation came for free.** The rule that plays `icon-drop-short` when a row opens
lives on `.item[data-open="true"] .indexRow svg` in the shared `Pillars.module.css`, so
adding icons to this accordion animated them without touching the animation at all. Verified:
`none` on closed rows, `icon-drop-short` on the open one, and the drop stepping
-28 -> -21.4 -> -2.5 -> 0.

**Every mark is drawn for 20px, which is a real constraint.** At the accordion's size a
1.6-unit stroke renders 1.0px and detail finer than roughly 2px of clear space merges. Two
consequences:

- The hero's `PawPrint` is deliberately **not** reused here despite being the obvious mark for
  species: its toe rings leave a ~1.5px hole at 20px, which is precisely the figure that made
  an earlier paw lump in this same accordion.
- `Birds` was drawn upside down first. The arcs peaked in the centre, which renders as a pair
  of carets; a bird needs wingtips high and the body dipping. The dips are also 5 and 3.3
  units rather than the 2 a bird glyph usually gets, because a shallower curve flattens into a
  wavy line under a 1.0px stroke.

Both were caught by rendering at true 20px and magnifying the real pixels 8x, not by looking
at the SVGs.

## Education rows band

The education page's disclosure rows run the same scroll-linked holographic band as the
homepage pillars section — see that entry for the mechanism, the palette and why the white
passes were removed. `.rowsInner` takes `position: relative; z-index: 1` for the same reason
`.list` does there, the band is `pointer-events: none`, and the accordion still opens.

It replaced a 14%, white-passed, 22s-clock diagonal wash. That version could only ever drift
one way; this one reverses with the scroll.

## Pillars scroll-linked band

The Conservation / Education / Technology section carries a diagonal holographic band that
travels **left to right as the page scrolls down, and back to the left on the way up**.

**It is scroll-linked, not timed**, and that is what makes the reversal free:
`animation-timeline: view()` makes the animation's progress a function of how far the section
has travelled through the viewport rather than of elapsed time, so scrolling back retraces it.
A time-based animation could only ever run one way. It replaced a radial ripple on a 22s clock
for exactly that reason. The pseudo-element is `inset: 0`, so its own `view()` progress is the
section's and no named timeline is needed.

Measured going down and then back up through the same five scroll positions: 0 -> 271.9 ->
543.6 -> 815.4 -> 1087.6px on the x, with y advancing proportionally for the diagonal, and the
identical values in reverse on the way up.

**The palette is packed edge to edge with no white passes** — 200px period, 50px a hue — and
that is the difference between a band and a sheen. The hero headings' version keeps a white
pass between each hue, which is what makes it read as a sheen; removing them turns the same
four pastels into a continuous colour band.

The shift lies along the gradient's own 115deg axis, `(sin115, -cos115) x 1200`, so the band
travels perpendicular to its own stripes rather than sliding sideways along them — six 200px
periods over the section's whole pass.

At 26% alpha, and because every pixel is now tinted rather than half of them, it measures
7.8% deepest deviation from white with a per-channel spread of [6.23, 4.60, 4.65] — against
the radial version's 5.1% and [2.66, 2.17, 2.24], so roughly 2.3x the presence, and still
short of the 12.9% version that was too loud. Contrast: 11.05:1 worst for
`--color-teal-950`, 7.59:1 for `--ink-2`.

`.list` keeps `position: relative; z-index: 1` so the accordion sits above the band — the
pseudo-element is positioned, and without it the band paints over the copy. It is
`pointer-events: none` and all three triggers hit-test clean.

The education page's disclosure rows carry the identical treatment — same palette, period,
alpha and scroll-linking — so the two accordion sections read as one thing in two places.
Measured on both, going down and back up through five scroll positions: 0 -> 271.8 -> 543.6
-> 815.9 -> 1087.6px, and the exact reverse coming up.

**Six periods per PASS, not a matched px-per-scroll rate.** The two sections differ in height
(913px on the homepage, 785px on education), so an identical rate would have to be recomputed
from both heights and would stop being true the moment either reflowed. Per-pass holds
structurally at every viewport; the residual difference in rate is under 8% and is not
perceptible.

## Icon drops — drawer and accordion

Two places share one fall: the drawer's three destination icons when the panel **opens**, and
the pillars accordion's mark when its row **opens**. Fall, land, two decaying rebounds, each
keyframe carrying its own easing so the drop accelerates like gravity while the bounces decay.
The keyframe is `icon-drop-short` in [`app/globals.css`](app/globals.css); the hero's own
`iconDrop` stays separate because it falls 120px into a banner where these fall 28px inside a
row.

**Modules reach that keyframe through `var(--anim-icon-drop-short)`, never by name.**
css-loader rewrites every `animation-name` inside a `*.module.css` to a hashed local name
whether or not that file declares the keyframe — so a plain `animation: icon-drop-short`
compiles to `NavDrawer_icon-drop-short__lBCzC`, matches nothing, and the animation silently
does not run. Nothing errors; the icons simply sit still. A `var()` is left alone, so the name
is published as a custom property beside the keyframe and both modules read it from there.

The accordion's row exposes `data-open` on `.item` as well as on the panel: the panel is a
*later sibling* of the trigger, and CSS cannot select backwards to reach the icon from it.
Only one icon moves per open, so unlike the drawer's three there is no stagger — the 40ms
delay just lets the panel below start expanding first.

Verified on both: `animation-name: none` while closed, `icon-drop-short` while open, and
`none` again once closed, so each replays every time rather than firing once on load. The
accordion's drop steps -28 -> -21.4 -> -2.5 -> -0.7 -> 0 with opacity 0 -> 1; the drawer's
cascade at t=500ms is -6.6px, -19.1px, -24.6px.

**The drawer's hangs off the checkbox, not off `.rowIndexRow`.** An unconditional animation
would have played through while the panel was still closed and been long finished by the time
anyone opened it. The checkbox lives in NavBar's module, so its hashed class is unreachable
from NavDrawer's; its `id` is a documented global (`DRAWER_ID`), and `~ *` walks from it to
the `.stack` sibling holding the panel:

    :global(#nav-drawer):checked ~ * .rowIndexRow svg { ... }

Its three are staggered 120/210/300ms, the first starting inside the panel's own 480ms reveal
so they arrive while the drawer is still opening.

## Drawer border

The panel carries a 4px holographic ring: `border: 4px solid transparent` with the gradient
supplied as a background layer clipped to the border box, so the ring is the same palette and
115deg axis as the wash inside it — but a much tighter one.

**The ring's period is 160px against the wash's 480**, and that is what makes the travel felt
rather than merely present: 20px bands instead of 60, and measured on the rendered edge, 31
coloured hue runs across the 1301px top edge (cycling blue-rose-peach-mint) against roughly
2.5 cycles before. 160 is not a free choice: the ring's shift is a fixed 1440px along the
gradient axis, so the period must divide it exactly or the loop seams — 480, 240, 160 and 120
all do, 200 does not.

**Four background layers, topmost first**, and none is redundant:

1. the panel wash at 55% over 480px, clipped to the padding box
2. white, clipped to the padding box — masks layer 3 out of the interior
3. the ring gradient at 82.5% over 160px, clipped to the border box
4. white, clipped to the border box — the ring's opaque base

Layer 4 was the fix for a real defect. Without it the ring's semi-transparent gradient
composited over the dark banner showing through from behind the panel rather than over white:
measured, the ring came out at mean rgb (134,135,126) against the interior's (240,240,238) — a
murky edge rather than a bright one, and **1.79x** the interior's saturation instead of the
1.5x asked for. With both gradients on white the ratio is the alpha ratio and nothing else:
ring mean rgb (240,242,238), **1.49x** the interior's saturation.

The whites are images rather than a `background-color` because a colour can only be the
shorthand's last value, where it would paint beneath every layer including the ring.

**One clock, two rates.** `background-position` takes a value per layer, so a single 14s
animation moves the wash 480px along the gradient axis and the ring 1440px — 3x the distance,
and with the ring's 160px period that is **nine** of its own cycles against the wash's one.

Both loop seamlessly because each shift is a whole number of that layer's periods along the
axis: `435 x 0.9063 + 202.9 x 0.4226 = 480 = 1 x 480` for the wash, and 3x that
`= 1440 = 9 x 160` for the ring. Verified: t=0 and t=14000ms differ by 1 pixel (rounding),
while t=0 and t=1000ms differ by 507,375 — it is moving, and it closes.

`box-sizing` is border-box globally, so the panel's outer size is unchanged; the 40px padding
is measured from the inside of the ring.

## Drawer destination rows

Each row is icon + number stacked **above** the title, matching the homepage accordion's
`.indexRow`, rather than Figma's inline number-title-description triple.

`.row` is a **grid**, not a flex row: `200px minmax(0, 1fr)`, with the index row in row 1 and
the title and description side by side in row 2. That last part is the point — the paragraph
aligns with the title because it shares the title's grid row, not because it is pushed down
by a measured offset. The offset approach was tried and rejected: it needed the index row's
height plus the gap, measured at **23px at 1440 but 22px at 1200**, so a constant was 1px out
across the fluid title range and would have drifted the moment the icon size, the number's
size or the gap changed.

Verified by ink rather than by line box, since a 30px title and a 12.5px paragraph carry very
different half-leading: topmost ink pixel of the title and of the description now both land at
y 86 at 1440 (85 vs 86 at 1200, sub-pixel rounding of the fluid size). Before, the paragraph's
ink sat 23px above the title's.

Aligning it costs height — the paragraph no longer occupies the index row's vertical space, so
the panel is 10px taller at 1440. Below 1120px the two tracks become equal, and below 640px
the description drops to its own row under the title, where there is nothing to align to.

On hover the whole row lifts 3px (`transform: translateY(-3px)`, 200ms ease-out) and there is
no underline — the lift is the affordance. It sits on the row rather than on the title: a
rise on the title alone would slide it against a static number and description and read as a
glitch. Verified with a dispatched pointer: translateY 0 -> -3 -> 0, with
`text-decoration-line: none` throughout.

`:focus-visible` gets the same lift plus an explicit outline, which the row did not have
before — worth adding while the hover cue was being changed, since the underline was
previously the only non-default indication that these were links.

The promo card's "Read the project" CTA keeps its own underline on hover; it is a separate
element with its own border and background hover treatment, and was not part of this change.

The icons are the same three marks the homepage pillars use — Leaf, OpenBook, NodeNetwork —
looked up from a `key` on each destination, the same pattern `Pillars.tsx` uses. The three
capabilities are the same three, so the mapping is too.

**Stroke width is 2.0 here against the homepage's 1.6, and that is not an inconsistency.**
Stroke width is in viewBox units, so it scales with the rendered size: 1.6 on a 32-unit box
renders 1.0px at the homepage's 20px icon but only 0.8px at this row's 16px, which reads
visibly fainter next to the number. 2.0 at 16px is 1.0px again. Checked at true 1x and
magnified — leaf vein, book spine and all three network nodes hold at that size.

`font-variant-numeric: tabular-nums` stays on `.rowIndex` although its original reason is
gone: it was there because proportional digits made "01" 13.3px wide against 15.1 and 15.2,
which shifted each title's x when the number was inline. With the number above the title
that no longer applies, but it still keeps the three index rows identical to each other.

## Heading ripple

Both hero headings ripple once on load — `components/WaveText`, which splits the string into
per-character spans with a 24ms stagger and a base delay of 1450ms (the blinder's last slat
lands at 1365ms, so anything earlier ripples behind a closed blind). The rise is 0.05em, in
em so it scales with the heading rather than reading differently at the homepage's 80px and
the education page's 68px — measured, 4px and 3.4px.

**The characters move with `position: relative` and `top`, not a transform, and that is the
whole reason this is a component rather than a one-line animation.** Both headings carry the
holographic sheen as a background clipped to their text. A transformed descendant is
composited on its own layer and stops being clipped against its ancestor's background, so
the glyphs render transparent with nothing behind them — the heading simply disappears.
Measured across four candidates on a flattened banner, counting bright pixels inside the
heading's box:

| | glyph pixels | |
|---|---|---|
| `transform: translateY(-4px)` | 546 | heading invisible |
| `translate: 0 -4px` | 546 | heading invisible |
| `position: relative; top: -4px` | 57,964 | clip intact |
| `margin-block-start: -4px` | 57,977 | clip intact |

The shipped version measures 58,097 bright pixels at rest and 58,054 while displaced, with
four hues present in both, so the sheen survives the ripple.

Words are wrapped as well as characters, and that is structural: a line can break between any
two inline-level boxes, so per-character spans alone would let the heading break mid-word.
The word is the `inline-block`; the characters inside stay inline.

The spans are `aria-hidden` and each heading carries the real string as an `aria-label`.
Splitting does not change the accessible name, but some screen readers pause at every inline
boundary, which would spell the heading out.

## Leaf entrance

The leaf flourish under each hero's subtext rises into place and then stirs, once on load.
`components/icons/Leaves.module.css`, with the component rather than in either hero's module —
both banners style this mark identically (68px, white, 0.9 opacity), so importing `<Leaves />`
is enough to get the behaviour.

**One keyframe set, not two animations.** Both phases move `transform`, and a second animation
on the same property replaces the first rather than following it — so every keyframe carries
the whole transform and the rotation phase writes `translateY(0)` explicitly. Verified the two
phases do not bleed: `translateY` is 16 -> 3.68 -> 0 across the rise and stays exactly 0 for
every rotation keyframe after it.

The rise takes the first 28% and eases out, settling rather than arriving at speed, with
opacity 0 -> 1 alongside it. The stir then builds 0.8 -> 1.8 -> 3.0 -> 3.4deg and decays back
to nothing — the "ease in" is that envelope, not the timing function, since a literal
`ease-in` would accelerate each swing into its extreme and stop dead there, reading as a
twitch rather than a stir.

`transform-origin: 4% 58%` is measured off the artwork: the two sprigs' stems converge at the
left edge a little below the middle, so the spray sways from where a branch would be held.
Pivoting about the bounding box centre reads as a wobble.

The **1450ms delay** matters. The blinder's last slat lands at `11 x 55ms + 760ms = 1365ms`,
so anything earlier plays behind a closed blind and is never seen — the same reason the hero
icon row is delayed to 1320/1410ms.

Verified identical on both pages, and `animation-name: none` under
`prefers-reduced-motion: reduce`.

## Drawer wash

The nav drawer's panel carries the same holographic palette as the hero headings, but as its
own `background` rather than clipped to text — so it paints beneath the content
automatically, with no pseudo-element or z-index to manage. The white stops of the original
become fully transparent white, which is the same thing over the panel's white ground and
keeps the interpolation out of grey, and the hues are diluted to **42%**: at full strength
those bands sit fine behind 30px headings, but this panel carries 14px body copy and they
were competing with it. 42% is a second dilution down from 55% — the first pass was still
reading as a pattern rather than a sheen.

**The 4px ring is the same wash at 63%**, i.e. 1.5x the panel, painted on `border-box`
under a transparent `border: 4px solid transparent` while the panel's own wash sits on
`padding-box`. Two whites are needed under them (one per box) and a colour can only be a
`background` shorthand's *last* value, so both are written as
`linear-gradient(var(--surface-white), var(--surface-white))` images instead. The ring's
period is 160px against the panel's 480px and its `background-position` travels three
periods to the panel's one on the same 14s clock — a `background-position` list takes a
value per layer, so one animation drives both rates. Measured on rendered pixels: mean
chroma (max-min channel) **18.94** on the ring against **12.84** on the panel interior,
a **1.48x** ratio against the 1.5x asked for.

**The wash travels along the gradient's own axis**, which is what makes it read as a
diagonal wash rather than a sideways slide. For a 115deg gradient that axis is
`(sin115, -cos115) = (0.9063, 0.4226)`, so one 480px period is a shift of
`(435, 202.9)px` — and shifting by exactly one period along the axis maps the pattern onto
itself. Verified: the frame at t=0 and the frame at t=14000ms differ by **0 pixels**, so the
loop has no seam. (The hero's pure-horizontal 529.62px lands on the same axis distance —
529.62 * sin115 = 480 — which is why that one loops too.)

14s rather than the hero's 9s: the panel is 1301px wide against a text box, and at the same
rate the bands hurried across it.

Measured effect on the panel and its type: the interior settles at mean rgb
(241.4, 241.8, 239.9) — a tint, not a pattern. Worst-case contrast against the washed
ground was 13.96:1 for `--brand-forest-800` and 6.86:1 for `--ink-2` at the earlier, more
saturated 55%, so the diluted wash can only be lighter behind the copy.

**Navigating closes the drawer.** The panel is a checkbox, and a client-side route change
does not reset it — so before, clicking FOUNDATION did navigate (the `href` was always
`/`, and hit-testing reached the link) but the new page arrived *behind* the still-open
panel, which read as a dead link. Every destination now calls a `closeDrawer` that sets
`drawerRef.current.checked = false` directly, rather than lifting the open state into
React: the checkbox has to remain the source of truth or the scripts-stripped snapshot
loses the drawer entirely. It is wired to the three brand chips, the logo, the nav links,
the three drawer rows and the promo — verified all six paths close and land on the right
route.

**Two panels, one handler.** Below 1180px the bar collapses and the brand chips move
inside the burger panel, which is a *second* checkbox — so a chip there had the identical
fault, navigating behind a panel that stayed open. `closeMenus` unchecks both, which is
why it is no longer called `closeDrawer`, and the burger's id is now the `BURGER_ID`
constant rather than a literal repeated on the input and its label.

**Hit-testing the drawer needs the panel fully open.** Probing a row 200ms after checking
the box reports the scrim on top of it, which looks like the rows being unclickable. It is
the 480ms `clip-path` reveal: a clipped-out region takes no hits, so the fixed scrim
underneath answers instead. From 400ms on all three rows and the promo receive hits, and a
real dispatched click at Conservation's centre lands on `/`. Synthetic `element.click()`
bypasses hit-testing entirely, so it cannot catch this either way — dispatch a mouse event
at coordinates when that is the question.

## Hero heading treatment

Both heroes share the holographic sheen, as the `.wf-iridescent` utility in
[`app/globals.css`](app/globals.css) — a repeating gradient on a 115deg axis, clipped to
the text and shifted 529.62px (one period *along its own axis*) over 9s. It was lifted out
of `Hero.module.css` so the palette and that figure have one definition. It combines safely
with a module class that sets `color`: whichever wins the cascade,
`-webkit-text-fill-color` is a separate property and still reveals the clipped background.

The education heading is weight 900 and 68px at 1440 (`clamp(32px, 4.72vw, 68px)`) against
the Foundation hero's 80px. Both figures are measured rather than chosen:

- **80px is not available.** "ANIMAL CARE & MANAGEMENT" measures 1380px at 80/900 against
  the 1276px column — 104px over, so it would take a third line. Foundation gets 80px
  because its longest line is 1046px: 18 characters against this heading's 24.
- **72px is available but not safe.** It measures 1242px, and with the copy-stack gap at
  16px and the lede at 800px the column comes to 395.7px against the 402px a 780px band
  leaves it. That is 34px of line-width margin and 6.3px of column slack; a small
  font-metric difference would break the heading to three lines. 68px reads the same and
  has 103px and 15.2px instead.
- Getting there cost two things, both of them earlier choices of mine rather than anything
  from the design: the copy stack's gap went 23px to 16px, and the lede's measure went
  680px to 800px, which drops it from five lines to four. 800 is the point where that
  happens — widening further buys nothing. It is still narrower than Figma's own 964px for
  this copy.
- The band is unaffected: still exactly 780px at 1440 and above, 640px at 600-700px, with
  16.7-54.7px between the paragraph and the cue across 360-1920px. The heading holds two
  lines down to 700px and takes three below ~500px, where the band grows to suit.

Cost to legibility, measured against the brightest patch of the banner photograph — the
foliage behind the end of "MANAGEMENT", 1.8% of the heading's area: pure white gave 1.92:1
there, and the palette's darkest stop (`#ffc8dc`) gives 1.33:1. Against a typical mid-tone
in that band it is 7.6-9.8:1. Weight 900 adds stroke mass that the ratio does not capture,
but the worst case did get worse; a deeper tint or a soft scrim behind the copy would
recover it if that matters more than the 25% the tint was set to.

## Banner heights

Both banners are the shared `--banner-height` token — `clamp(560px, 54.17vw, 780px)`, and
`640px` below 700px — so they are the same height at the design width and on phones.
Measured: 780px each at 1440px and above, 640px each from 600-700px.

They diverge in between, and the reason is worth knowing before "fixing" it. That curve
floors at 560px, which is too short for a banner carrying a heading, a paragraph and a
scroll cue: the Foundation hero already collides there — measured, its cue overlaps its
leaf flourish by 13.9px at 1050px and by 12.4px at 1000px. The education band takes
`--banner-height` as a **floor** rather than a fixed height, so instead of colliding it
grows: +116.8px over Foundation at 1000px, +65.3px at 1200px, +31.6px at 1300px, back to
+0 by 1440px.

Making them equal at every width means changing the shared token — raising the 560px floor,
or making it content-aware — which moves the homepage too. Worth doing, since it would also
fix that hero's existing overlap.

The education hero uses one layout at all widths for this: `min-height: var(--edu-banner-h)`
with symmetric `--cue-reserve` padding and `justify-content: center`. Above the crossover
that is arithmetically identical to absolutely centring the copy in a fixed band (measured
at 1440: 190.5 + 399 + 190.5 = 780), and below it the band grows. It replaced a fixed band
plus a content-driven mode behind a breakpoint — the two agreed at the boundary, so the
breakpoint was redundant, and it had to be re-derived every time the copy or the height
curve changed. It was wrong twice: adding the icon row moved the crossover ~100px, and
adopting `--banner-height` moved it again.

Unlike the Foundation hero, this one carries **no `--headline-nudge`**. That hero pushes its
copy down 25px for optical centring; here, once the band came down to 780px, the 50px cue
lift and the copy could not both have their room, and the nudge was the most expendable of
the three.

## Education partner logos

The strip sits on white (`.partnersBand`), so the seven marks needed to be re-sourced.
Figma's own exports were fully opaque with the dark page composited into them — measured,
their background was exactly `rgb(5, 21, 12)`, i.e. `--surface-darker` — so on any other
ground they showed as seven rectangles. These are rebuilt from the original uploads in the
Figma file (`download_assets` on node `1965:21318`) with the baked ground removed and real
alpha restored, then trimmed and written at 3x their CSS size.

- `edu-partner-2` is an **SVG**, alone among the seven: Sanjeevan is a vector in Figma, not
  a raster fill, so it never appeared in the raw-image set and is used as vector instead.
  It is also the sharpest of the seven as a result.
- `edu-partner-3` (Mysuru) and `edu-partner-4` (Indore Zoo) arrived as opaque rasters on
  white and pale-green grounds respectively; both grounds were flat, so they were knocked
  out by solving `obs = a*F + (1-a)*bg` per pixel rather than by a colour-key, which would
  have left fringes.
- **`edu-partner-7` (TiCi NatureLab) is a modified mark.** Its source is white lettering
  and a green leaf on a solid black square — invisible on a white band whichever way it is
  cut. The lettering is recoloured to `--ink-1` and the leaf left alone, which is in effect
  the light-background version of their logo. **Ask TiCi for their own dark-on-light
  artwork and replace this.** The recolour is applied at build time, not in CSS, so the
  file on disk is the modified version.
- Rendered contrast against the white band, median over each mark's ink: ASI 5.24:1,
  Mysuru 12.27:1, Indore 3.89:1, SPZP 3.55:1, Vivekanand 3.42:1, TiCi 12.52:1. Sanjeevan
  measures 1.72:1 median because much of that mark is a pale sun and light blue waves —
  its lettering is 7.23:1 and it reads clearly.
- The originals are not in the repo; they were replaced in place. Figma remains the source.

## Known copy gaps in the source design

- The Sanjeevan mark's tagline arrived as "Rejuvination of L fe" — the "i" of "Life" was
  missing from the artwork Figma supplies. It now reads "Life": rather than draw a glyph,
  the "i" from "Rejuvinat**i**on" in the same tagline is cloned and translated into the
  gap (`id="i-of-Life"`, the last path in
  [`public/assets/edu-partner-2.svg`](public/assets/edu-partner-2.svg)), so the stroke
  weight, shape and colour are the lettering's own. Placement was measured off a 16x
  render: the gap between "L" and "f" was 2.31 units against a natural letter gap of
  0.94-1.06, and the clone sits centred in it with 0.88 before and 1.00 after. Note the
  word is also spelt "Rejuvination" rather than "Rejuvenation" in the partner's own
  artwork; that is left alone.
- Editing a partner's mark is worth knowing about even for one letter — **confirm it with
  Sanjeevan, or ask them for corrected artwork.**
- Figma's partner-strip heading was missing the "I" of "In"; that one is corrected in
  [`components/Education/EducationPartners.tsx`](components/Education/EducationPartners.tsx).

- Figma only supplies body copy for the open accordion row (Education). Conservation and
  Technology carry placeholder copy in
  [`components/Pillars/pillars.data.ts`](components/Pillars/pillars.data.ts).
- The third proof card (Barrington Tops, Australia) repeated the Mediterranean Monk Seal
  name and description from card two. The arc shows those two cards side by side, so the
  duplicate could not stay: it now carries placeholder copy matched to the photo and the
  location. **Replace it with the real programme.**
- Proof cards four and five are additions with no Figma source. Their copy is written to
  the established voice and their photos are derived from existing assets — card four is
  cropped out of `approach-photo.jpg`, card five is a frame lifted from `hero.mp4`.
  **All four of those need replacing with real programme copy and photography**; every
  one is flagged `PLACEHOLDER` in
  [`components/ProofWall/proofWall.data.ts`](components/ProofWall/proofWall.data.ts).
