import { type ReactNode } from "react";

type HighlightBoxProps = {
  children: ReactNode;
  className?: string;
  /** Rotation in degrees — subtle magazine sticky-note offset */
  rotate?: number;
};

/**
 * Signature sticky-note highlight from Ana's Instagram carousels:
 * cream rectangle + dark olive text + subtle drop shadow + slight rotation.
 */
export default function HighlightBox({
  children,
  className = "",
  rotate = -1.5,
}: HighlightBoxProps) {
  return (
    <span
      className={`inline-block bg-cream px-3 py-2 text-ink shadow-soft ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </span>
  );
}
