import type { ReactNode } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

/**
 * Shared page chrome — Navbar + <main> + Footer.
 * Mirrors the wrapping pattern that App.tsx used for the original single-page layout.
 */
export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
