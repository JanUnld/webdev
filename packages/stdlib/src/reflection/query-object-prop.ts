/**
 * Queries an object property value by its path in the format `prop1.prop2.prop3` also including out of the
 * box support for index based signatures e.g. `0.prop1.1.prop2`. The resolution is performed in a null safe manner,
 * not breaking but returning when discovering such an undefined case
 *
 * @example ```typescript
 * queryObjectPropPath(obj, '0.prop1.1.prop2');
 * queryObjectPropPath(obj, [ 0, 'prop1', 1, 'prop2' ]);
 * ```
 *
 * @param obj The targeted object to resolve the path from
 * @param path The desired property path as explicit array or dot (.) separated string
 */
export function queryObjectPropPath<T = unknown>(
  obj: unknown,
  path: PropertyKey[] | string
): T {
  // make sure we are dealing with an array of property keys
  path = (typeof path === 'string' ? path.split('.') : path) || [];
  // reduce the given keys one after the other to finally reach the desired property
  return (obj != null &&
    // @ts-ignore innerObj is of type `unknown`
    path.reduce(
      (innerObj, nextProperty) => innerObj?.[nextProperty],
      obj
    )) as T;
}

/**
 * Queries an object property value either by using a selector function or a path as described by {@link queryObjectPropPath}
 *
 * @example ```typescript
 * queryObjectProp(obj, '0.prop1.1.prop2');
 * queryObjectProp(obj, [ 0, 'prop1', 1, 'prop2' ]);
 * queryObjectProp(obj, (o) => o?.[0]?.prop1?.[1]?.prop2);
 * ```
 * @param obj The targeted object to resolve the path from
 * @param selector The desired selector function or property path as explicit array or dot (.) separated string
 */
export function queryObjectProp<T = unknown, O = unknown>(
  obj: O,
  selector: ((obj: O) => T) | PropertyKey[] | string
): T {
  return typeof selector !== 'function'
    ? queryObjectPropPath<T>(obj, selector)
    : selector(obj);
}
