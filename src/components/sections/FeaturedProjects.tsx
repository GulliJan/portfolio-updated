import { projects } from '@/data/projects';
import type { Project } from '@/types';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { Tag } from '@/components/ui/Tag';

function ArrowLink({ href, children }: { href: string; children: React.ReactNode }) {
  const isExternal = /^https?:\/\//.test(href);
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-2 transition-colors"
      {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
    >
      <span className="border-b border-accent/40 group-hover:border-accent-2 pb-0.5 transition-colors">
        {children}
      </span>
      <span
        aria-hidden="true"
        className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      >
        ↗
      </span>
    </a>
  );
}

function FeaturedCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={index * 100}>
      <article
        className="group rounded-3xl border border-border bg-surface shadow-soft overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft-lg hover:border-accent/30"
        aria-labelledby={`project-${project.slug}-title`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Content */}
          <div
            className="lg:col-span-12 p-7 sm:p-9 lg:p-10 space-y-5"
          >
            <div className="flex items-center gap-3 text-subtle">
              <span className="font-mono text-xs">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="h-px w-8 bg-border-strong" />
              <span className="font-mono text-xs">{project.year}</span>
            </div>

            <div>
              <h3
                id={`project-${project.slug}-title`}
                className="font-serif text-3xl sm:text-4xl tracking-tight text-fg"
              >
                {project.title}
              </h3>
              <p className="mt-2.5 text-lg text-muted text-balance max-w-prose">
                {project.tagline}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 text-sm text-muted">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  aria-hidden="true"
                  className="text-subtle"
                >
                  <path d="M20 7h-7l-2-2H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                </svg>
                {project.role}
              </span>
            </div>

            <p className="text-[0.95rem] text-muted leading-relaxed max-w-prose">
              {project.description}
            </p>

            {project.highlights.length > 0 && (
              <ul className="space-y-2.5 max-w-prose" aria-label="Highlights">
                {project.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex gap-3 text-[0.9rem] text-muted leading-relaxed"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      className="text-accent shrink-0 mt-1"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            )}

            <ul className="flex flex-wrap gap-1.5 pt-1">
              {project.tags.map((tag) => (
                <li key={tag}>
                  <Tag variant="accent">{tag}</Tag>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-2">
              {project.links.demo && (
                <ArrowLink href={project.links.demo}>Live demo</ArrowLink>
              )}
              {project.links.repo && <ArrowLink href={project.links.repo}>Source</ArrowLink>}
              {project.links.caseStudy && (
                <ArrowLink href={project.links.caseStudy}>Case study</ArrowLink>
              )}
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <Section
      id="work"
      label="03 / Selected work"
      heading="Things I've built."
      intro="A couple of projects I'm proud of shipped, used by real people, and the kind of thing I'd happily walk through in an interview."
    >
      <div className="space-y-8 sm:space-y-10">
        {featured.map((project, i) => (
          <FeaturedCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </Section>
  );
}
