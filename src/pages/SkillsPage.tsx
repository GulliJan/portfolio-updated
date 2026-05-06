import { PageLayout } from '@/components/layout/PageLayout';
import { Skills } from '@/components/sections/Skills';

export function SkillsPage() {
  return (
    <PageLayout>
      {/* Subtle tinted background — preserved from the original home layout */}
      <div className="bg-bg-soft/50 border-y border-border/60">
        <Skills />
      </div>
    </PageLayout>
  );
}
