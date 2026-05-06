import { PageLayout } from '@/components/layout/PageLayout';
import { Hero } from '@/components/sections/Hero';
import { ResumeCTA } from '@/components/sections/ResumeCTA';
import { Contact } from '@/components/sections/Contact';

export function Home() {
  return (
    <PageLayout>
      <Hero />
      <ResumeCTA />
      <Contact />
    </PageLayout>
  );
}
