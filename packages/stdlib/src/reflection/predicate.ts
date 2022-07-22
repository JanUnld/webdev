/**
 * Describes a predicate function returning either `true` or `false`, depending on the input value and arguments
 *
 * @example ```typescript
 * const isBar: Predicate<{ foo: string }> = value => value.foo === 'bar';
 * ```
 */
export type Predicate<T, P extends any[] = unknown[]> = (
  value: T,
  ...args: P
) => boolean;
