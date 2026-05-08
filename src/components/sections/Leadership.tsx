import { leadership } from '@/data/experience';
import type { LeadershipItem } from '@/types';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';

const categoryStyles: Record<
  LeadershipItem['category'],
  { pill: string; icon: JSX.Element }
> = {
  Research: {
    pill: 'bg-accent/5 border-accent/20 text-accent',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  Leadership: {
    pill: 'bg-accent-2/5 border-accent-2/20 text-accent-2',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  Volunteer: {
    pill: 'bg-success/5 border-success/20 text-success',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  Community: {
    pill: 'bg-accent/5 border-accent/20 text-accent',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  Recognition: {
    pill: 'bg-award/5 border-award/30 text-award',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.9l-6.2 4.4 2.4-7.4L2 9.4h7.6z" />
      </svg>
    ),
  },
};

export function Leadership() {
  return (
    <Section
      id="community"
      label="07 / Leadership & Community"
      heading={
        <>
          Beyond the code {' '}
          <span className="italic text-gradient">the rooms I&apos;m in.</span>
        </>
      }
      intro="I believe good software comes from people who pay attention to the world around them. Here's where I show up outside the editor in research, peer leadership, and community organizing."
    >
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {leadership.map((item, i) => {
          const style = categoryStyles[item.category];
          return (
            <Reveal as="li" key={`${item.role}-${item.organization}`} delay={i * 60}>
              <article className="group h-full overflow-hidden rounded-2xl border border-border bg-surface shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-soft-lg">
                <div className="p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <span
                      tabIndex={item.image ? 0 : undefined}
                      className={`group/pill relative inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[0.7rem] font-mono uppercase tracking-wider ${style.pill} ${item.image ? 'cursor-help' : ''}`}
                    >
                      {style.icon}
                      {item.category}
                      {item.image && (
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute left-0 top-full mt-2 z-20 w-60 origin-top-left rounded-xl border border-border bg-surface shadow-soft-lg overflow-hidden opacity-0 scale-95 -translate-y-1 transition-all duration-200 ease-out group-hover/pill:opacity-100 group-hover/pill:scale-100 group-hover/pill:translate-y-0 group-focus-within/pill:opacity-100 group-focus-within/pill:scale-100 group-focus-within/pill:translate-y-0"
                          style={{ aspectRatio: '16 / 10' }}
                        >
                          <img
                            src={item.image}
                            alt=""
                            loading="lazy"
                            decoding="async"
                            className="h-full w-full object-cover"
                          />
                        </span>
                      )}
                    </span>
                    <span className="font-mono text-xs text-subtle shrink-0 pt-1">
                      {item.period}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl tracking-tight text-fg leading-snug">
                    {item.role}
                  </h3>
                  <p className="text-sm text-accent mt-1 font-medium">
                    {item.organization}
                  </p>
                  <p className="text-sm text-muted mt-4 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </article>
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}
