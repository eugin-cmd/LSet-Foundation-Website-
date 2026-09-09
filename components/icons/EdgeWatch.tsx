/**
 * Antz Edge, drawn as a wall-mounted camera.
 *
 * "Automated behavioural observation running continuously across your priority
 * enclosures - no keeper presence required." What distinguishes Edge is that
 * the watching is installed and unattended, which a camera on a mounting plate
 * says and a floating eye does not.
 *
 * Four elements. Two earlier versions were rejected on the same test — rendered
 * at the true 34px and magnified. The first added field-of-view arcs and an
 * enclosure line, where the arcs read as a hill and the whole thing looked like
 * a lamp on a table. The second put the mount out to the right as an arm and a
 * vertical plate, which at this size read as the letters "OH". The mount is now
 * an arm and a ceiling plate above the body, which is the silhouette nobody
 * mistakes for anything else.
 */
export default function EdgeWatch() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" focusable="false">
      <rect x="4.4" y="12" width="17.2" height="12.8" rx="2.6" />
      <circle cx="13" cy="18.4" r="3.4" />
      <path d="M18.4 12V9" />
      <path d="M13.6 7.4h9.6" />
    </svg>
  );
}
