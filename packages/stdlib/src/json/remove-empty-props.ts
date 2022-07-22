/** Describes a type of empty property value that might appear within an object */
export type EmptyJsonPropType =
  | 'emptyString'
  | 'emptyArray'
  | 'emptyObject'
  | 'nullOrUndefined';

/**
 * Removes all "empty" properties from the given json object and returns the "compressed" value.
 * The "empty" condition is given for {@link EmptyJsonPropType}
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
 * @param json The object or array value that should be "compressed"
 * @param options Optional configuration interface
 * @param options.ignore Excludes one or more empty property cases from being removed
 * @param options.recursive May disable the default recursion of this function
 *
 * @remarks Prototype inheritance won't be preserved, please use JSON only!
 */
export function removeEmptyProps<T>(
  json: T,
  options?: {
    ignore?: EmptyJsonPropType[] | EmptyJsonPropType;
    recursive?: boolean;
  }
): Partial<T> {
  const isArray = Array.isArray(json);
  return (
    json &&
    Object.entries(json).reduce(
      (objOrArray: unknown, [key, value]) => {
        // pre-check whether the value is empty and should be removed already
        if (canRemoveProp(value, options)) {
          return objOrArray;
        }
        // if we are dealing with a nested value, try to recursively remove all empty properties
        if (
          options?.recursive === false &&
          (Array.isArray(value) || typeof value === 'object')
        ) {
          value = removeEmptyProps(value, options);
        }
        // re check whether the value should be removed after the recursive resolution
        if (canRemoveProp(value, options)) {
          return objOrArray;
        }
        // finally re-construct the array or object accumulator value
        if (isArray) {
          return [...(objOrArray as any[]), value];
        } else {
          return { ...(objOrArray as any), [key]: value };
        }
      },
      isArray ? [] : {}
    )
  );
}

/** @internal */
function canRemoveProp(
  value: unknown,
  options?: { ignore?: EmptyJsonPropType[] | EmptyJsonPropType }
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
