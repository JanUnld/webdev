/**
 * Formats an object into a human-readable string value based on the desired options. Options may customize the format
 * as well as the tokens that shall be used within the format.
 *
 * @example ```typescript
 * format(date, {
 *   pattern: 'HH:mm',
 *   tokens: {
 *     HH: d => d?.getHours(),
 *     mm: d => d?.getMinutes()
 *     // property keys do support regular expressions
 *     "s{2}": d => d?.getSeconds()
 *   }
 * })
 * ```
 *
 * @param value The value to be formatted into human-readable text
 * @param options Required options to return the desired formatted output
 */
export function format<T>(
  value: T,
  options: {
    pattern: string;
    tokens: { [token: string]: (obj: T) => unknown };
    fallback?: T;
  }
): string {
  let str = options.pattern;
  for (const [token, valueSelector] of Object.entries(options.tokens)) {
    const regExp = new RegExp(token, 'g');
    if (regExp.test(options.pattern)) {
      const fallbackObj = options.fallback;
      const strValue =
        (value != null && valueSelector(value)) ||
        (fallbackObj && valueSelector(fallbackObj)) ||
        '';
      str = str.replace(regExp, `${strValue}`);
    }
  }
  return str.replace(/\s+/, ' ').trim();
}
