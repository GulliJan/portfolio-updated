import { site, socials } from '@/data/site';
import { Reveal } from '@/components/ui/Reveal';

export function Contact() {
  // Filter the social cards once, so we can stagger them with a stable index.
  const socialCards = socials.filter((s) => !s.href.startsWith('mailto:'));

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative container-page py-24 sm:py-32 lg:py-36 scroll-mt-24"
    >
      {/* Decorative soft radial behind the headline */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-20 h-64 bg-gradient-to-b from-accent/5 via-transparent to-transparent pointer-events-none"
      />

      <div className="relative">
        <Reveal>
          <p className="section-label mb-6">08 / Contact</p>

          <h2
            id="contact-heading"
            className="font-serif tracking-tight text-balance"
            style={{ fontSize: 'clamp(2.25rem, 6vw, 4.5rem)', lineHeight: 1.05 }}
          >
            Looking for a{' '}
            <span className="italic text-gradient inline-block pr-[0.15em] pb-[0.05em]">software developer</span> who
            <br className="hidden sm:block" /> cares about the details?
          </h2>

          <p className="mt-8 text-lg text-muted max-w-prose leading-relaxed">
            I&apos;m actively looking for software developer and co-op
            opportunities. I reply to every message, usually within a day.
          </p>
        </Reveal>

        {/* Primary email CTA */}
        <Reveal delay={120}>
          <div className="mt-12">
            <a
              href={`mailto:${site.email}`}
              className="group inline-flex items-start gap-3 font-serif tracking-tight"
              style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)', lineHeight: 1.1 }}
            >
              <span className="border-b-2 border-accent/40 group-hover:border-accent pb-1 transition-colors text-fg">
                {site.email}
              </span>
              <span
                aria-hidden="true"
                className="text-accent text-base mt-3 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
              >
                ↗
              </span>
            </a>
          </div>
        </Reveal>

        {/* Contact grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Reveal delay={0}>
            <div className="rounded-2xl border border-border bg-surface shadow-soft p-5 transition-all hover:-translate-y-0.5 hover:shadow-soft-lg hover:border-accent/30">
              <p className="section-label mb-2">Phone</p>
              <a
                href={`tel:${site.phone.replace(/\D/g, '')}`}
                className="text-base text-fg hover:text-accent transition-colors"
              >
                {site.phone}
              </a>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="rounded-2xl border border-border bg-surface shadow-soft p-5 transition-all hover:-translate-y-0.5 hover:shadow-soft-lg hover:border-accent/30">
              <p className="section-label mb-2">Location</p>
              <p className="text-base text-fg">{site.location}</p>
            </div>
          </Reveal>
          {socialCards.map((s, i) => (
            <Reveal key={s.label} delay={160 + i * 80}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl border border-border bg-surface shadow-soft p-5 transition-all hover:-translate-y-0.5 hover:shadow-soft-lg hover:border-accent/30 group"
              >
                <p className="section-label mb-2">{s.label}</p>
                <p className="text-base text-fg group-hover:text-accent transition-colors break-words">
                  {s.handle}{' '}
                  <span aria-hidden="true" className="text-subtle group-hover:text-accent">
                    ↗
                  </span>
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
