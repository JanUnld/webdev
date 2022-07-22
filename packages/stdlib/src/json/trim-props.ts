/**
 * Trims any object or array string property values within an object or array, these may include
 * both leading and trailing white spaces by default. This behavior may be configured using
 * additional options
 *
 * @example ```typescript
 * trimJsonProps({ foo: '  bar   ' }) // { foo: 'bar' }
 * trimJsonProps({ foo: '  bar   ' }, { mode: 'trailing' }) // { foo: '  bar' }
 * trimJsonProps({ foo: '  bar----------' }, { include: ['-'] }) // { foo: 'bar' }
 * ```
 *
 * @param json The desired object or array value to be trimmed
 * @param options Optional configuration interface
 * @param options.mode Changes the trim mode to either leading or trailing
 * @param options.include Adds more expressions to be trimmed while still depending on the given mode
 * @param options.recursive May disable the default recursion of this function
 *
 * @remarks Prototype inheritance won't be preserved, please use JSON only!
 */
export function trimProps<T>(
  json: T,
  options?: {
    mode?: 'leading' | 'trailing' | 'both';
    include?: Array<RegExp | string>;
    recursive?: boolean;
  }
): T {
  const isArray = Array.isArray(json);
  return Object.entries(json).reduce(
    (objOrArray: unknown, [key, value]) => {
      const mode = options?.mode || 'both';
      const regExpGroups = ['\\s+', ...(options?.include || [])].join('|');
      const leadingRegExp = new RegExp(`^(${regExpGroups})`);
      const trailingRegExp = new RegExp(`(${regExpGroups})$`);

      if (typeof value === 'string') {
        if (mode === 'leading' || mode === 'both') {
          value = value.replace(leadingRegExp, '');
        }
        if (mode === 'trailing' || mode === 'both') {
          value = value.replace(trailingRegExp, '');
        }
      } else if (
        options?.recursive === false &&
        (Array.isArray(value) || typeof value === 'object')
      ) {
        value = trimProps(value, options);
      }

      if (isArray) return [...(objOrArray as any[]), value];
      else return { ...(objOrArray as any), [key]: value };
    },
    isArray ? [] : {}
  );
}
