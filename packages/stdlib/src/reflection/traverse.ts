import { Predicate } from './predicate';
import { queryProp } from '../json/query-prop';

/**
 * Traverses an object instance based on a "next" selector function. The traverse operation recursively continues
 * until it either hits a `null` or `undefined` "next" value or an optionally also providable "break" predicate
 * function will return a truthy result.
 *
 * @example ```typescript
 * traverse(treeNode, {
 *   through: 'parentNode',
 *   break: (node) => node.foo === 'bar'
 * })
 * ```
 *
 * @param obj The object or array to traverse through
 * @param options Required configuration interface
 * @param options.through The selector function or property path returning the _next_ traverse target
 * @param options.break Optional predicate to break the traverse when returning `true`
 */
export function traverse<T = unknown>(
  obj: T,
  options: {
    through: ((obj: T) => unknown) | PropertyKey[] | string;
    break?: Predicate<T>;
  }
): T {
  const nextObj = queryProp(obj, options.through) as T;
  const shouldBreak = options.break;

  if (nextObj != null && !shouldBreak?.(nextObj))
    return traverse(nextObj, options);
  else return nextObj ?? obj;
}
