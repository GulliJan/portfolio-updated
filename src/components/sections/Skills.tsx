import { skillGroups } from '@/data/skills';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';

/** Tiny inline icons keyed by group title — no icon library needed */
const groupIcons: Record<string, JSX.Element> = {
  Languages: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  'Frameworks & Libraries': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  ),
  'Tools & Platforms': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  'Databases & Concepts': (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
};

export function Skills() {
  return (
    <Section
      id="skills"
      label="02 / Toolkit"
      heading="Things I reach for."
      intro="I default to well-understood, well-documented tools so I can spend my attention on the parts that actually matter, the interface, the edge cases, and the people using it."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {skillGroups.map((group, idx) => (
          <Reveal key={group.title} delay={idx * 80}>
            <div className="h-full rounded-2xl border border-border bg-surface shadow-soft p-6 sm:p-7 transition-all hover:-translate-y-0.5 hover:shadow-soft-lg hover:border-accent/30">
              <div className="flex items-center gap-3 mb-5">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  {groupIcons[group.title]}
                </div>
                <h3 className="font-mono text-[0.72rem] uppercase tracking-widest text-subtle">
                  {group.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-[0.9rem] text-fg leading-snug flex items-start gap-2"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-1.5 inline-block h-1 w-1 rounded-full bg-accent/60 shrink-0"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
