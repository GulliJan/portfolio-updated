import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/cn';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md';

interface BaseProps {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
}

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type AnchorProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type Props = ButtonProps | AnchorProps;

const base =
  'inline-flex items-center justify-center gap-2 font-medium rounded-full ' +
  'transition-all duration-200 ' +
  'focus-visible:outline-none ' +
  'active:scale-[0.98] whitespace-nowrap';

const variants: Record<Variant, string> = {
  // Signature gradient — the single strongest visual moment on the page
  primary:
    'bg-gradient-accent text-white shadow-soft hover:shadow-soft-lg hover:-translate-y-0.5',
  secondary:
    'border border-border bg-surface text-fg hover:border-accent hover:text-accent shadow-soft',
  ghost: 'text-muted hover:text-fg hover:bg-border/40',
};

const sizes: Record<Size, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-6 text-[0.95rem]',
};

export function Button(props: Props) {
  const { variant = 'primary', size = 'md', className, children, ...rest } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if ('href' in rest && rest.href !== undefined) {
    const { href, ...anchorRest } = rest as AnchorProps;
    const isExternal = /^https?:\/\//.test(href);
    return (
      <a
        href={href}
        className={classes}
        {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
        {...anchorRest}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonProps)}>
      {children}
    </button>
  );
}
