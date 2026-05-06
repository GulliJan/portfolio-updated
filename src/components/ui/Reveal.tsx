import type { ReactNode, ElementType } from 'react';
import { useReveal } from '@/hooks/useReveal';
import { cn } from '@/lib/cn';

type Direction = 'up' | 'down' | 'left' | 'right' | 'in';

interface RevealProps {
  children: ReactNode;
  /** Stagger delay in ms — applied as CSS animation-delay */
  delay?: number;
  /** HTML tag to render */
  as?: ElementType;
  /** Direction the element travels in from. Default 'up'. */
  direction?: Direction;
  className?: string;
}

const animationByDirection: Record<Direction, string> = {
  up: 'animate-fade-up',
  down: 'animate-fade-down',
  left: 'animate-fade-left',
  right: 'animate-fade-right',
  in: 'animate-fade-in',
};

/**
 * Subtly fades + translates children in when they enter the viewport.
 * Automatically skipped when the user prefers reduced motion.
 */
export function Reveal({
  children,
  delay = 0,
  as: Tag = 'div',
  direction = 'up',
  className,
}: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <Tag
      ref={ref}
      style={visible ? { animationDelay: `${delay}ms` } : undefined}
      className={cn(
        'transition-opacity',
        visible ? animationByDirection[direction] : 'opacity-0',
        className,
      )}
    >
      {children}
    </Tag>
  );
}
