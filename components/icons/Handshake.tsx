/** PARTNER — two figures, filled. Solid rather than stroked so it holds at the
 *  14px the fact labels set it at, where a 1px stroke would go grey. */
export default function Handshake() {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" focusable="false">
      <circle cx="6" cy="4.4" r="2.6" />
      <path d="M6 8.3c-2.6 0-4.6 1.5-4.6 3.4v1.5c0 .4.3.7.7.7h7.8c.4 0 .7-.3.7-.7v-1.5c0-1.9-2-3.4-4.6-3.4Z" />
      <circle cx="12.1" cy="5.5" r="2.1" />
      <path d="M12.1 9.2c-.6 0-1.2.1-1.8.3.8.8 1.3 1.9 1.3 3v1.4h3.1c.4 0 .7-.3.7-.7v-1c0-1.7-1.5-3-3.3-3Z" />
    </svg>
  );
}
