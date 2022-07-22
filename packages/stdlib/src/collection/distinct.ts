import { queryProp } from '../json/query-prop';

/**
 * Distinctively filters a collection leaving only unique entries
 *
 * @example ```typescript
 * [ 1, 1, 2 ].filter(distinct); // [ 1, 2 ]
 * ```
 */
export const distinct = (value: unknown, index: number, array: unknown[]) =>
  array.indexOf(value) === index;

/**
 * Creates a function that distinctively filters a collection leaving only unique entries
 * by a given property selector
 *
 * @example ```typescript
 * [ { x: 1 }, { x: 1 }, { x: 2 } ].filter(distinctBy('x')); // [ { x 1 }, { x: 2 } ]
 * ```
 */
export function distinctBy<T>(
  selector: ((value: T) => unknown) | PropertyKey[] | string
) {
  return (value: T, i: number, arr: T[]) =>
    arr.findIndex((value2) => {
      return queryProp(value, selector) === queryProp(value2, selector);
    }) === i;
}
