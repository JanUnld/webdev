import { Sort } from './sort';
import { queryProp } from '../json/query-prop';

/** @internal */
export function compareObjectProps<T>(
  selector: ((o: T) => unknown) | PropertyKey[] | string,
  a: T,
  b: T
): number {
  const va = queryProp<string, T>(a, selector) ?? '';
  const vb = queryProp<string, T>(b, selector) ?? '';
  return va < vb ? -1 : va > vb ? 1 : 0;
}

/**
 * Basic property sort mechanism comparing the raw values returned from the {@link selector}. The
 * selector may be specified as either a selector function or a property path descriptor
 *
 * @example ```typescript
 * new PropSort('foo.bar').apply([
 *   { foo: { bar: 'z' } },
 *   { foo: { bar: 'a' } }
 * ])
 * // [
 * //   { foo: { bar: 'a' } },
 * //   { foo: { bar: 'z' } }
 * // ]
 * ```
 */
export class PropSort<T> extends Sort<T> {
  /**
   * @param selector Either a selector function or property path to resolve values when sorting
   */
  constructor(public selector: ((o: T) => unknown) | PropertyKey[] | string) {
    super((a: T, b: T) => compareObjectProps(selector, a, b), 'ascending');
  }
}
