import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navItems, site } from '@/data/site';
import { ThemeToggle } from './ThemeToggle';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/cn';

export function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll-spy: highlight nav links whose section is currently in view.
  // Works for any nav item whose href contains a hash (e.g. "/#contact" or "#about").
  // Re-runs on route change so it picks up section IDs available on the new page.
  useEffect(() => {
    const ids = navItems
      .map((n) => {
        const i = n.href.indexOf('#');
        return i >= 0 ? n.href.slice(i + 1) : '';
      })
      .filter(Boolean);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    setActiveId(null);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry closest to the top edge that is currently intersecting.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-accent focus:text-white focus:px-4 focus:py-2 focus:rounded-full focus:text-sm"
      >
        Skip to content
      </a>

      <header
        className={cn(
          'fixed top-0 inset-x-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-bg/75 backdrop-blur-lg border-b border-border shadow-soft'
            : 'bg-transparent border-b border-transparent',
        )}
      >
        <div className="container-page flex h-16 items-center justify-between">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 font-serif text-lg tracking-tight hover:opacity-90 transition-opacity"
            aria-label={`${site.name} — home`}
          >
            <span
              aria-hidden="true"
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-accent text-white font-medium italic shadow-soft transition-transform duration-300 group-hover:scale-105"
            >
              GA
            </span>
            <span className="hidden sm:inline text-fg">
              {site.firstName.toLowerCase()}
              <span className="text-accent">.</span>
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const hashIdx = item.href.indexOf('#');
              const hashId = hashIdx >= 0 ? item.href.slice(hashIdx + 1) : '';
              const path = hashIdx >= 0 ? item.href.slice(0, hashIdx) : item.href;
              // Active when the route matches; for hash items, also when scroll-spy says so.
              const isActive = hashId
                ? pathname === (path || '/') && activeId === hashId
                : pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={cn(
                    'relative px-3 py-2 text-sm transition-colors rounded-full',
                    isActive ? 'text-fg' : 'text-muted hover:text-fg',
                  )}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={cn(
                      'pointer-events-none absolute left-3 right-3 -bottom-0.5 h-px origin-center bg-accent transition-transform duration-300 ease-out',
                      isActive ? 'scale-x-100' : 'scale-x-0',
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button
              href={site.resumeUrl}
              size="sm"
              variant="secondary"
              className="hidden sm:inline-flex"
            >
              Résumé
            </Button>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface/60 text-muted hover:text-fg transition-colors"
            >
              <span className="sr-only">Menu</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" aria-hidden="true">
                {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <div
            id="mobile-nav"
            className="md:hidden bg-bg border-b border-border animate-slide-down"
          >
            <nav aria-label="Mobile" className="container-page py-6 flex flex-col gap-1">
              {navItems.map((item, i) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-2xl font-serif tracking-tight hover:text-accent transition-colors animate-fade-up"
                  style={{ animationDelay: `${60 + i * 40}ms` }}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={site.resumeUrl}
                className="mt-4 inline-flex py-3 text-sm font-mono uppercase tracking-widest text-accent animate-fade-up"
                style={{ animationDelay: `${60 + navItems.length * 40}ms` }}
              >
                Résumé →
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
