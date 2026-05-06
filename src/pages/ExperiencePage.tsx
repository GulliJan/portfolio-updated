import { PageLayout } from '@/components/layout/PageLayout';
import { Experience } from '@/components/sections/Experience';
import { Certifications } from '@/components/sections/Certifications';

export function ExperiencePage() {
  return (
    <PageLayout>
      <Experience />

      {/* Tinted band — preserved from the original home layout */}
      <div className="bg-bg-soft/50 border-y border-border/60">
        <Certifications />
      </div>
    </PageLayout>
  );
}
