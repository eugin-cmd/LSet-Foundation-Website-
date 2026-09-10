/** TIMELINE — a filled clock face with the hands knocked out through
 *  fill-rule, so the mark stays one colour on any ground. */
export default function ClockFilled() {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" focusable="false">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1Zm.75 3.3a.75.75 0 0 0-1.5 0V8c0 .27.14.52.38.65l2.5 1.45a.75.75 0 1 0 .75-1.3L8.75 7.57V4.3Z"
      />
    </svg>
  );
}
