import { useEffect, useRef, useState } from 'react';

interface Options {
  /** Fraction of the element that must be visible to trigger. Default 0.15 */
  threshold?: number;
  /** If true, only reveals once — no re-hide on scroll back up. Default true */
  once?: boolean;
  /** rootMargin string passed to IntersectionObserver */
  rootMargin?: string;
}

/**
 * Observes an element and returns { ref, visible } for lightweight fade-in
 * reveals. Honors prefers-reduced-motion by starting in the visible state.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options: Options = {},
) {
  const { threshold = 0.15, once = true, rootMargin = '0px 0px -40px 0px' } = options;
  const ref = useRef<T | null>(null);

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const [visible, setVisible] = useState<boolean>(prefersReducedMotion);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once, rootMargin, prefersReducedMotion]);

  return { ref, visible } as const;
}
