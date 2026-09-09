/**
 * Row 04, "Compliance, drawn live" — a shield with a tick.
 *
 * The shield is the only outline in the set that tapers, so it is legible at
 * 20px from silhouette alone. The tick matters as much as the shield: the row
 * is about returns assembled from records that already pass, not about
 * defending against an audit.
 */
export default function ComplianceShield() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" focusable="false">
      <path d="M16 4.4 26.2 7.9v7.9c0 6.2-4.3 10.4-10.2 11.8-5.9-1.4-10.2-5.6-10.2-11.8V7.9Z" />
      <path d="M11.6 15.8 15 19.2 20.8 13.4" />
    </svg>
  );
}
