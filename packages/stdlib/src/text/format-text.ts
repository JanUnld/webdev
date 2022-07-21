/**
 * Formats an object into a human-readable string value based on the desired options. Options may customize the format
 * as well as the tokens that shall be used within the format.
 *
 * @example ```typescript
 * formatText(date, {
 *   format: 'HH:mm',
 *   tokens: {
 *     HH: d => d?.getHours(),
 *     mm: d => d?.getMinutes()
 *     // property keys do support regular expressions
 *     "s{2}": d => d?.getSeconds()
 *   }
 * })
 * ```
 *
 * @param obj The object value to be formatted into human-readable text
 * @param options Required options to return the desired output
 */
export function formatText<T>(
  obj: T,
  options: {
    format: string;
    tokens: { [token: string]: (obj: T) => unknown };
    fallback?: T;
  }
): string {
  let str = options.format;
  for (const [token, valueSelector] of Object.entries(options.tokens)) {
    const regExp = new RegExp(token, 'g');
    if (regExp.test(options.format)) {
      const fallbackObj = options.fallback;
      const value =
        (obj != null && valueSelector(obj)) ||
        (fallbackObj && valueSelector(fallbackObj)) ||
        '';
      str = str.replace(regExp, `${value}`);
    }
  }
  return str.replace(/\s+/, ' ').trim();
}
