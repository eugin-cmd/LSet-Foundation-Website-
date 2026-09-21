/**
 * Two figures, one set behind the other.
 *
 * Its own drawing rather than <Handshake>, which is the site's other people
 * mark and cannot do this job: that one is drawn solid on a 16x16 box for the
 * 14px the fact labels set it at, where a 1px stroke would go grey. This sits
 * above a section heading at three times that size, where a filled mark reads
 * as a blot and the line art beside it does not.
 *
 * The second figure is smaller, higher and only half drawn — a head and the
 * shoulder that clears the first one. Two figures side by side read as a pair;
 * one behind the other reads as a group seen from the front, which is what a
 * page of people talking about the place wants.
 *
 * Stroke, cap and join come from the caller, as the banner icon rows' marks do,
 * so the same drawing takes whatever weight it is given.
 */
export default function People() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" focusable="false">
      <circle cx="13" cy="12" r="4.6" />
      <path d="M4.8 26.5c0-4.5 3.7-8.2 8.2-8.2s8.2 3.7 8.2 8.2" />
      <circle cx="23.4" cy="10.8" r="3.5" />
      <path d="M22.4 17.9c3.1.8 5.3 3.6 5.3 6.9" />
    </svg>
  );
}
