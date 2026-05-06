import { site, socials } from '@/data/site';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg-soft/40 mt-16">
      <div className="container-page py-14 flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="inline-flex items-center gap-2 mb-3">
            <span
              aria-hidden="true"
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-accent text-white font-serif italic shadow-soft"
            >
              GA
            </span>
            <span className="font-serif text-2xl tracking-tight text-fg">
              {site.firstName.toLowerCase()}
              <span className="text-accent">.</span>
            </span>
          </div>
          <p className="text-sm text-subtle max-w-sm">
            Built with React, TypeScript, and Tailwind. Designed and coded in Hamilton, ON.
          </p>
        </div>
        <nav aria-label="Social" className="flex flex-wrap gap-x-6 gap-y-2">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="text-sm text-muted hover:text-accent transition-colors"
              {...(/^https?:\/\//.test(s.href) && { target: '_blank', rel: 'noopener noreferrer' })}
            >
              {s.label} <span aria-hidden="true">↗</span>
            </a>
          ))}
        </nav>
      </div>
      <div className="container-page pb-5 text-xs text-subtle font-mono">
        © {year} {site.name}. Crafted with care.
      </div>
    </footer>
  );
}
