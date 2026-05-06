import { certifications } from '@/data/experience';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';

export function Certifications() {
  if (certifications.length === 0) return null;

  return (
    <Section
      id="certifications"
      label="06 / Credentials"
      heading="Certifications & recognition."
      intro="Formal training, academic honours, and awards that back up the work."
    >
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certifications.map((cert, i) => (
          <Reveal as="li" key={cert.name} delay={i * 60}>
            <article className="h-full rounded-2xl border border-border bg-surface shadow-soft p-6 sm:p-7 transition-all hover:border-accent/30 hover:shadow-soft-lg">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent shrink-0">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="8" r="6" />
                    <path d="m9 14.2-1.9 8.1L12 20l4.9 2.3L15 14.2" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-serif text-lg leading-snug tracking-tight text-fg">
                      {cert.name}
                    </h3>
                    <span className="font-mono text-xs text-subtle shrink-0 pt-0.5">
                      {cert.year}
                    </span>
                  </div>
                  <p className="text-sm text-accent mt-1 font-medium">
                    {cert.issuer}
                  </p>
                  {cert.description && (
                    <p className="text-sm text-muted mt-3 leading-relaxed">
                      {cert.description}
                    </p>
                  )}
                  {cert.credentialUrl && cert.credentialUrl !== '#' && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-3 text-sm text-accent hover:text-accent-2 transition-colors"
                    >
                      View credential
                      <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
