export type RemoveEmptyJsonPropTarget =
  | 'emptyString'
  | 'emptyArray'
  | 'emptyObject'
  | 'nullOrUndefined';

/**
 * Removes all "empty" properties from the given json object and returns the "compressed" value.
 * The "empty" condition is given for any `null`, `undefined`, empty string, array or object
 * value, given it is not ignored
 *
 * @example ```typescript
 * removeEmptyJsonProps({
 *   emptyStr: '',
 *   emptyArr: [],
 *   emptyObj: {},
 *   empty: null,
 *   foo: 'bar'
 * }, { ignore: 'emptyString' }) // { emptyStr: '', foo: 'bar' }
 * ```
 *
 * @param objOrArray The schema object value that should be "compressed"
 * @param options Optional configuration interface to ignore individual remove cases
 *
 * @remarks Prototype inheritance won't be preserved, please use JSON only!
 */
export function removeEmptyJsonProps<T>(
  objOrArray: T,
  options?: { ignore?: RemoveEmptyJsonPropTarget[] | RemoveEmptyJsonPropTarget }
): Partial<T> {
  const ignore = options?.ignore;
  const isArrayAcc = Array.isArray(objOrArray);
  return (
    objOrArray != null &&
    Object.entries(objOrArray).reduce(
      (accObjOrArray: unknown, [key, value]) => {
        // pre-check whether the value is empty and should be removed already
        if (mayRemoveJsonProp(value, options)) return accObjOrArray;
        // if we are dealing with a nested schema value, try to recursively remove all empty properties
        if (Array.isArray(value) || typeof value === 'object')
          value = removeEmptyJsonProps(value, options);
        // re check whether the value should be removed after the recursive resolution
        if (mayRemoveJsonProp(value, options)) return accObjOrArray;
        // finally re-construct the array or object accumulator value
        if (isArrayAcc) return [...(accObjOrArray as any[]), value];
        else return { ...(accObjOrArray as any), [key]: value };
      },
      isArrayAcc ? [] : {}
    )
  );
}

/** @internal */
function mayRemoveJsonProp(
  value: any,
  options?: { ignore?: RemoveEmptyJsonPropTarget[] | RemoveEmptyJsonPropTarget }
): boolean {
  const ignore = options?.ignore;

  const isNullOrUndefined = value == null;
  const isEmptyString = typeof value === 'string' && value.trim() === '';
  const isEmptyArray = Array.isArray(value) && value?.length === 0;
  const isEmptyObj =
    !isNullOrUndefined &&
    typeof value === 'object' &&
    Object.entries(value).length === 0;

  return (
    (isNullOrUndefined &&
      ignore !== 'nullOrUndefined' &&
      !ignore?.includes('nullOrUndefined')) ||
    (isEmptyString &&
      ignore !== 'emptyString' &&
      !ignore?.includes('emptyString')) ||
    (isEmptyArray &&
      ignore !== 'emptyArray' &&
      !ignore?.includes('emptyArray')) ||
    (isEmptyObj && ignore !== 'emptyObject' && !ignore?.includes('emptyObject'))
  );
}
