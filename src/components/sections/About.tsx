import { site } from '@/data/site';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';

const education: Array<{ school: string; credential: string; period: string; honour?: string }> = [
  {
    school: 'Mohawk College',
    credential: 'Diploma · Computer Systems Technician',
    period: 'Sep 2023 – Apr 2025',
    honour: 'Dean\u2019s Honour List',
  },
  {
    school: 'Ishraq University',
    credential: 'Bachelor of Economics and Management',
    period: 'Sep 2017 – Apr 2021',
  },
  {
    school: 'Afghan Institute of Learning',
    credential: 'Leadership, Women Empowerment and Management Course',
    period: 'Mar 2021',
  },
];

const quickFacts: Array<{ label: string; value: string }> = [
  { label: 'Based in', value: 'Hamilton, ON' },
  { label: 'Available', value: 'Immediately' },
  { label: 'Looking for', value: 'Software Developer/co-op' },
  { label: 'Focus', value: 'Full-stack + CV' },
];

export function About() {
  return (
    <Section id="about" label="01 / About" heading="A few things about me.">
      <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16">
        <Reveal>
          <div className="space-y-5 text-lg text-muted leading-relaxed max-w-prose">
            {site.bio.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="space-y-6">
            {/* Education card */}
            <div className="rounded-2xl border border-border bg-surface shadow-soft p-6 sm:p-7">
              <p className="section-label mb-5">Education</p>
              <ul className="space-y-5">
                {education.map((ed) => (
                  <li key={ed.school} className="border-l-2 border-accent/30 pl-4">
                    <p className="font-serif text-lg tracking-tight text-fg">
                      {ed.school}
                    </p>
                    <p className="text-sm text-muted mt-0.5">{ed.credential}</p>
                    <p className="text-xs font-mono text-subtle mt-1.5">
                      {ed.period}
                    </p>
                    {ed.honour && (
                      <span className="inline-flex items-center gap-1 mt-2 text-[0.7rem] font-mono uppercase tracking-wider text-accent bg-accent/5 border border-accent/20 rounded-full px-2.5 py-0.5">
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.9l-6.2 4.4 2.4-7.4L2 9.4h7.6z" />
                        </svg>
                        {ed.honour}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick facts card */}
            <div className="rounded-2xl border border-border bg-surface shadow-soft p-6 sm:p-7">
              <p className="section-label mb-5">At a glance</p>
              <dl className="space-y-3.5">
                {quickFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="flex items-baseline justify-between gap-4"
                  >
                    <dt className="font-mono text-xs uppercase tracking-widest text-subtle">
                      {fact.label}
                    </dt>
                    <dd className="text-sm font-medium text-fg">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
