import { experience } from '@/data/experience';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';

export function Experience() {
  return (
    <Section
      id="experience"
      label="05 / Experience"
      heading="Where I've worked."
      intro="Hands-on experience balancing freelance development, studies, and work in fast-paced environments."
    >
      <ol className="space-y-5">
        {experience.map((item, i) => (
          <Reveal as="li" key={`${item.organization}-${item.period}`} delay={i * 80}>
            <article className="rounded-2xl border border-border bg-surface shadow-soft p-7 sm:p-8 transition-all hover:border-accent/30 hover:shadow-soft-lg">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
                <div className="lg:col-span-3">
                  <span className="inline-block px-3 py-1 rounded-full bg-accent/5 border border-accent/15 font-mono text-[0.7rem] uppercase tracking-widest text-accent">
                    {item.period}
                  </span>
                </div>

                <div className="lg:col-span-9 space-y-4">
                  <header>
                    <h3 className="font-serif text-2xl tracking-tight text-fg">
                      {item.role}
                    </h3>
                    <p className="text-muted mt-1">{item.organization}</p>
                  </header>

                  <p className="text-[0.95rem] text-muted leading-relaxed max-w-prose">
                    {item.summary}
                  </p>

                  <ul className="space-y-2.5 max-w-prose">
                    {item.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex gap-3 text-[0.9rem] text-muted leading-relaxed"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 inline-block h-1 w-1 rounded-full bg-accent shrink-0"
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
