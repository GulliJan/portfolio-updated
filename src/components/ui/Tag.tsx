import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type Variant = 'default' | 'accent' | 'award';

interface TagProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

const variants: Record<Variant, string> = {
  default:
    'border-border text-muted bg-surface/60',
  accent:
    'border-accent/20 text-accent bg-accent/5',
  award:
    'border-award/30 text-award bg-award/5',
};

/** Small monospace tech/tag chip with soft variants. */
export function Tag({ children, variant = 'default', className }: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 font-mono text-[0.7rem] uppercase tracking-wider',
        'px-2.5 py-1 rounded-full border',
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
