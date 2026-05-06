import { useEffect, useState } from 'react';

interface TypewriterProps {
  /** The full text to be typed. */
  text: string;
  /** Per-character delay in ms. Defaults to 65ms — feels natural, not laboured. */
  speed?: number;
  /** Initial pause before typing starts, in ms. */
  startDelay?: number;
  /** className applied to the wrapping span (so the parent's typography flows through). */
  className?: string;
  /** When true, no caret is rendered after typing finishes. Default false. */
  hideCaretWhenDone?: boolean;
}

/**
 * Tiny dependency-free typewriter for short headings.
 * — Renders the full text immediately when the user prefers reduced motion.
 * — Uses a single setInterval, cleaned up on unmount.
 * — Caret is decorative (aria-hidden) and the announced text remains the full string.
 */
export function Typewriter({
  text,
  speed = 65,
  startDelay = 250,
  className,
  hideCaretWhenDone = false,
}: TypewriterProps) {
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const [shown, setShown] = useState(prefersReducedMotion ? text.length : 0);

  useEffect(() => {
    if (prefersReducedMotion) return;

    let i = 0;
    let interval: number | undefined;
    const startTimer = window.setTimeout(() => {
      interval = window.setInterval(() => {
        i += 1;
        setShown(i);
        if (i >= text.length && interval !== undefined) {
          window.clearInterval(interval);
        }
      }, speed);
    }, startDelay);

    return () => {
      window.clearTimeout(startTimer);
      if (interval !== undefined) window.clearInterval(interval);
    };
  }, [text, speed, startDelay, prefersReducedMotion]);

  const done = shown >= text.length;
  const showCaret = !(hideCaretWhenDone && done);

  return (
    <span className={className}>
      {/* Visible, animated portion */}
      <span aria-hidden="true">{text.slice(0, shown)}</span>
      {showCaret && (
        <span
          aria-hidden="true"
          className="inline-block w-[0.06em] -mb-[0.05em] ml-[0.04em] bg-current align-baseline animate-caret"
          style={{ height: '0.95em' }}
        />
      )}
      {/* Screen-reader text — the full string is always announced. */}
      <span className="sr-only">{text}</span>
    </span>
  );
}
