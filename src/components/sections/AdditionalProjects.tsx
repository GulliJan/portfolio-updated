import { projects } from '@/data/projects';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { Tag } from '@/components/ui/Tag';

export function AdditionalProjects() {
  const additional = projects.filter((p) => !p.featured);

  if (additional.length === 0) return null;

  return (
    <Section
      id="more"
      label="04 / More"
      heading="Other things I've shipped."
      intro="Smaller client work and side projects."
    >
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {additional.map((project, i) => (
          <Reveal key={project.slug} as="li" delay={i * 60}>
            <article className="h-full rounded-2xl border border-border bg-surface shadow-soft p-7 sm:p-8 flex flex-col gap-4 transition-all hover:-translate-y-0.5 hover:shadow-soft-lg hover:border-accent/30">
              <header className="flex items-baseline justify-between gap-4">
                <h3 className="font-serif text-xl tracking-tight">
                  {project.title}
                </h3>

                <span className="font-mono text-xs text-subtle shrink-0">
                  {project.year}
                </span>
              </header>

              <p className="text-[0.95rem] text-muted leading-relaxed">
                {project.tagline}
              </p>

              <p className="text-sm text-muted leading-relaxed flex-1">
                {project.description}
              </p>

              <ul className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <li key={tag}>
                    <Tag variant="accent">{tag}</Tag>
                  </li>
                ))}
              </ul>

              {(project.links?.demo || project.links?.repo) && (
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-2">
                  {project.links?.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-2 transition-colors"
                    >
                      <span className="border-b border-accent/40 group-hover:border-accent-2 pb-0.5 transition-colors">
                        Live demo
                      </span>

                      <span
                        aria-hidden="true"
                        className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      >
                        ↗
                      </span>
                    </a>
                  )}

                  {project.links?.repo && (
                    <a
                      href={project.links.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-2 transition-colors"
                    >
                      <span className="border-b border-accent/40 group-hover:border-accent-2 pb-0.5 transition-colors">
                        Source
                      </span>

                      <span
                        aria-hidden="true"
                        className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      >
                        ↗
                      </span>
                    </a>
                  )}
                </div>
              )}
            </article>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}