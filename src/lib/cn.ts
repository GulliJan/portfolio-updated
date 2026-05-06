/**
 * Tiny className joiner. Filters out falsy values so you can write:
 *   cn('base', isActive && 'active', other)
 * Kept dependency-free — no clsx/twMerge needed for a site this size.
 */
export function cn(
  ...classes: Array<string | number | false | null | undefined>
): string {
  return classes.filter(Boolean).join(' ');
}
