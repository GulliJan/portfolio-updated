import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface SectionProps {
  id?: string;
  /** Small uppercase label (e.g. "01 / About") */
  label?: string;
  /** Section heading */
  heading?: ReactNode;
  /** Optional short intro paragraph rendered under the heading */
  intro?: ReactNode;
  /** Additional top-right content — e.g. a link to the GitHub */
  aside?: ReactNode;
  children: ReactNode;
  className?: string;
}

/**
 * Base layout for every top-level section. Keeps vertical rhythm and label/
 * heading structure consistent so the page reads as one continuous document.
 */
export function Section({
  id,
  label,
  heading,
  intro,
  aside,
  children,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'container-page py-10 sm:py-10 lg:py-24 scroll-mt-24',
        className
      )}
      aria-labelledby={id ? `${id}-heading` : undefined}
    >
      {(label || heading || aside) && (
        <header className="mb-8 sm:mb-10 flex items-start justify-between gap-6">
          <div className="max-w-prose">
            {label && <p className="section-label mb-3">{label}</p>}

            {heading && (
              <h2
                id={id ? `${id}-heading` : undefined}
                className="text-headline text-balance"
              >
                {heading}
              </h2>
            )}

            {intro && (
              <p className="mt-4 text-muted text-lg leading-relaxed text-balance">
                {intro}
              </p>
            )}
          </div>

          {aside && <div className="hidden sm:block shrink-0">{aside}</div>}
        </header>
      )}

      {children}
    </section>
  );
}