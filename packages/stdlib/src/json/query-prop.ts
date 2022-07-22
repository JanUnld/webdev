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
 * @param json The targeted object or array to resolve the path from
 * @param path The desired property path as explicit array or dot (.) separated string
 */
export function queryPropPath<R, T>(
  json: T,
  path: PropertyKey[] | string
): R | null {
  if (json == null) {
    return null;
  }
  // make sure we are dealing with an array of property keys
  path = (typeof path === 'string' ? path.split('.') : path) || [];
  // reduce the given keys one after the other to finally reach the desired property
  return (
    (path.reduce(
      (innerObj, nextProperty) => (innerObj as never)?.[nextProperty],
      json
    ) as unknown as R) ?? null
  );
}

/**
 * Queries an object property value either by using a selector function or a path as described by {@link queryPropPath}
 *
 * @example ```typescript
 * queryObjectProp(obj, '0.prop1.1.prop2');
 * queryObjectProp(obj, [ 0, 'prop1', 1, 'prop2' ]);
 * queryObjectProp(obj, (o) => o?.[0]?.prop1?.[1]?.prop2);
 * ```
 * @param json The targeted object or array to resolve the path from
 * @param query The desired query function or property path as explicit array or dot (.) separated string
 */
export function queryProp<R, T>(
  json: T,
  query: ((obj: T) => unknown) | PropertyKey[] | string
): R | null {
  return typeof query !== 'function'
    ? queryPropPath<R, T>(json, query)
    : (query(json) as unknown as R) ?? null;
}
