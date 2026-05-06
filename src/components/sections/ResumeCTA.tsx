import { site } from '@/data/site';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';

export function ResumeCTA() {
  return (
    <section
      aria-labelledby="resume-cta-heading"
      className="container-page py-20 sm:py-24"
    >
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-accent px-8 py-14 sm:px-12 sm:py-20 shadow-soft-lg">
          {/* Decorative shapes */}
          <div
            aria-hidden="true"
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/10 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-white/10 blur-3xl"
          />

          <div className="relative max-w-3xl text-white">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-white/70 mb-5">
              Résumé
            </p>
            <h2
              id="resume-cta-heading"
              className="text-headline font-serif tracking-tight text-balance"
            >
              Prefer to read it on paper?
            </h2>
            <p className="mt-5 text-lg text-white/85 max-w-prose text-balance">
              Grab the latest version education, projects, and a condensed snapshot
              of everything on this site.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                href={site.resumeUrl}
                variant="secondary"
                className="!bg-white !text-accent-2 !border-transparent hover:!bg-white/95"
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
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download résumé
              </Button>
              <Button
                href="#contact"
                variant="secondary"
                className="!bg-transparent !text-white !border-white/40 hover:!bg-white/10"
              >
                Or say hi first
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
