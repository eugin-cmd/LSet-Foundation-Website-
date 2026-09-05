/**
 * Figma `Vector` — an 8x15 stroked chevron drawn inside a 15x8 box.
 * Collapsed rows rotate it 90deg (pointing down); the open row rotates -90deg.
 */
export default function Chevron() {
  return (
    <svg width="8" height="15" viewBox="0 0 10.3873 16.9392" fill="none" preserveAspectRatio="none" aria-hidden="true">
      <path
        d="M0.969608 15.9696L8.96961 8.46961L0.969608 0.969608"
        stroke="currentColor"
        strokeWidth="1.93921"
        strokeLinecap="round"
      />
    </svg>
  );
}
