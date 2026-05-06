import { site, socials, heroStats } from '@/data/site';
import { Button } from '@/components/ui/Button';
import { Typewriter } from '@/components/ui/Typewriter';

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden hero-orbs"
      aria-label="Introduction"
    >
      {/* Decorative grid fade background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 grid-fade opacity-60 pointer-events-none"
      />

      <div className="container-page relative pt-32 pb-20 sm:pt-40 sm:pb-24 lg:pt-44 lg:pb-28">
        {/* Two-column layout: text left, image right (desktop only) */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] gap-10 lg:gap-14 items-center">
          {/* LEFT — text column */}
          <div className="min-w-0">
            {/* Availability chip */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-accent/20 bg-accent-soft/40 backdrop-blur-sm animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-success opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
              </span>
              <p className="text-xs font-medium text-accent tracking-wide">
                Open to junior developer & co-op roles · {site.location}
              </p>
            </div>

            {/*
              Main headline.
              Sized to fit the left column without clipping:
              - scales down on narrow breakpoints
              - max caps at 3.5rem on wide screens
              - lets words wrap naturally
            */}
            <h1
                className="mt-8 font-serif font-medium text-balance tracking-tight"
                style={{
                  fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                  lineHeight: 1.05,
                  letterSpacing: '-0.03em',
                }}
              >
              <span
                className="block animate-fade-up"
                style={{ animationDelay: '80ms' }}
              >
                <Typewriter text={`Hi, I\u2019m ${site.firstName}.`} hideCaretWhenDone />
              </span>
              <span
                className="block animate-fade-up"
                style={{ animationDelay: '200ms' }}
              >
                I build{' '}
                <span className="italic text-gradient inline-block pr-[0.15em] pb-[0.05em]">
                  Thoughtful
                </span>{' '}
                web experiences.
              </span>
            </h1>

            <p
              className="mt-8 max-w-xl text-base sm:text-lg text-muted leading-relaxed text-balance animate-fade-up"
              style={{ animationDelay: '340ms' }}
            >
              {site.tagline}
            </p>

            <div
              className="mt-8 flex flex-wrap items-center gap-3 animate-fade-up"
              style={{ animationDelay: '460ms' }}
            >
              <Button href="#work">
                See my work
                <span aria-hidden="true" className="ml-0.5">
                  →
                </span>
              </Button>
              <Button href="#contact" variant="secondary">
                Get in touch
              </Button>
            </div>

            {/* Socials */}
            <ul
              className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm animate-fade-up"
              style={{ animationDelay: '600ms' }}
            >
              {socials.map((s) => {
                const isExternal = /^https?:\/\//.test(s.href);
                return (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      className="group inline-flex items-center gap-2 text-muted hover:text-accent transition-colors"
                      {...(isExternal && {
                        target: '_blank',
                        rel: 'noopener noreferrer',
                      })}
                    >
                      <span className="font-mono text-xs uppercase tracking-widest">
                        {s.label}
                      </span>
                      <span className="text-subtle group-hover:text-accent transition-colors">
                        {s.handle}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* RIGHT — image column (hidden on mobile to keep focus on text) */}
          <div
            className="hidden lg:block animate-fade-up"
            style={{ animationDelay: '520ms' }}
          >
            <div className="relative mx-auto max-w-md group">
              {/* Soft gradient glow behind the image */}
              <div
                aria-hidden="true"
                className="absolute -inset-4 bg-gradient-accent opacity-20 blur-2xl rounded-full transition-opacity duration-500 group-hover:opacity-40"
              />
              {/* Image frame — circular, gentle float; cross-fades to a second image on hover */}
              <div className="relative aspect-square rounded-full overflow-hidden border border-border bg-surface shadow-soft-lg motion-safe:animate-subtle-float">
                {/* Hover image — sits underneath, revealed when the primary image fades */}
                <img
                  src="/images/profile-coding.jpg"
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Primary image — on top, fades out on hover to reveal the image below */}
                <img
                  src="/images/about.jpg"
                  alt="Illustration of Gul working at her desk with a laptop and monitor"
                  loading="eager"
                  decoding="async"
                  className="relative w-full h-full object-cover transition-opacity duration-500 ease-out group-hover:opacity-0"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats strip — full width below; per-cell stagger */}
        <div
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border shadow-soft animate-fade-in"
          style={{ animationDelay: '680ms' }}
        >
          {heroStats.map((stat, i) => (
            <div
              key={stat.label}
              className="bg-surface/80 backdrop-blur-sm px-5 py-5 sm:px-6 sm:py-6 animate-fade-up"
              style={{ animationDelay: `${760 + i * 90}ms` }}
            >
              <p className="font-serif text-2xl sm:text-3xl font-medium text-gradient tracking-tight">
                {stat.value}
              </p>
              <p className="mt-1 text-xs sm:text-[0.8rem] text-muted leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}