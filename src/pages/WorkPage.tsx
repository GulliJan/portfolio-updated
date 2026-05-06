import { PageLayout } from '@/components/layout/PageLayout';
import { FeaturedProjects } from '@/components/sections/FeaturedProjects';
import { AdditionalProjects } from '@/components/sections/AdditionalProjects';

export function WorkPage() {
  return (
    <PageLayout>
      <FeaturedProjects />

      {/* Tinted band between the two — preserved from the original home layout */}
      <div className="bg-bg-soft/50 border-y border-border/60">
        <AdditionalProjects />
      </div>
    </PageLayout>
  );
}
