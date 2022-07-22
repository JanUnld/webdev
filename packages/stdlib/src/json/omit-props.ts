/**
 * Excludes one or more entries from the given object or array and returns the result
 *
 * @example ```typescript
 * omitJsonProps({ foo: 'bar', bar: 'baz' }, 'bar'); // { foo: 'bar' }
 * ```
 *
 * @param json The object or array value be "compressed"
 * @param exclude One or more desired property keys to be excluded
 *
 * @remarks Prototype inheritance won't be preserved, please use JSON only!
 */
export function omitProps<T, K extends keyof T>(
  json: T,
  ...exclude: K[]
): Omit<T, K> {
  const isArray = Array.isArray(json);

  if (isArray) {
    // make sure we are dealing with a string value here to properly
    // compare the keys in the filter below
    exclude = exclude.map((key) => key.toString()) as K[];
  }

  return Object.entries(json)
    .filter(([key]) => !exclude?.includes(key as K))
    .reduce(
      (objOrArray: unknown, [key, value]) => {
        if (isArray) {
          return [...(objOrArray as []), value];
        } else {
          return { ...(objOrArray as object), [key]: value };
        }
      },
      isArray ? [] : {}
    ) as Omit<T, K>;
}
