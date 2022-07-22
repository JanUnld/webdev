import { queryProp } from '../../json/query-prop';
import { format as _format } from '../format';

/**
 * Formats any object containing name information into a string. The string format can be provided
 * using the following tokens. If no format is present the pipe will default to "full". Additionally
 * any field can be backed up with a fallback value
 *
 * **Format Tokens:**
 *
 * | Token  | Description                                                   | Example      |
 * | ------ | ------------------------------------------------------------- | ------------ |
 * |  `FF`  | The fully quantified first name of the person                 | Jane, John   |
 * |  `ff`  | Shortened first letter format of the first name of the person | J.           |
 * |  `LL`  | The fully quantified last name of the person                  | Doe          |
 * |  `ll`  | Shortened first letter format of the last name of the person  | D.           |
 * |  `TT`  | The title of the person                                       | Dr.          |
 *
 * **Format Aliases:**
 *
 * | Alias       | Format     | Example       |
 * | ----------- | ---------- | ------------- |
 * | `full`      | `TT FF LL` | Dr. Jane Doe  |
 * | `short`     | `ff LL`    | J. Doe        |
 * | `shortLast` | `FF ll`    | Jane D.       |
 * | `reversed`  | `LL, FF`   | Doe, Jane     |
 * <br>
 *
 * @example ```typescript
 * formatFullName(obj, 'reversed') // Doe, Jane
 * formatFullName(obj, 'TT ff LL') // Dr. J. Doe
 * ```
 *
 * @param obj     The object value to select the name information from
 * @param format  The desired format to use for the output string value. Defaults to "full"
 * @param options Optional parameters that can be used during the format operation
 */
export function formatFullName<T>(
  obj: T,
  format = 'full',
  options?: {
    firstName?: ((obj: T) => string) | PropertyKey[] | string;
    lastName?: ((obj: T) => string) | PropertyKey[] | string;
    title?: ((obj: T) => string) | PropertyKey[] | string;
    fallback?: T;
  }
): string {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const {
    firstName = (o: any) => o?.firstName ?? o?.first_name,
    lastName = (o: any) => o?.lastName ?? o?.last_name,
    title = (o: any) => o.title,
    fallback,
  } = options ?? {};
  /* eslint-enable @typescript-eslint/no-explicit-any */

  switch (format) {
    case 'short':
      format = 'ff LL';
      break;
    case 'shortLast':
      format = 'FF ll';
      break;
    case 'full':
      format = 'TT FF LL';
      break;
    case 'reversed':
      format = 'LL, FF';
      break;
  }

  return _format(obj, {
    pattern: format,
    tokens: {
      // first first-name letter including a dot:
      ff: (o: T) => `${queryProp<string, T>(o, firstName)?.charAt(0) ?? ''}.`,
      // first last-name letter including a dot:
      ll: (o: T) => `${queryProp<string, T>(o, lastName)?.charAt(0) ?? ''}.`,
      // first name:
      FF: (o) => `${queryProp(o, firstName) ?? ''}`,
      // last name:
      LL: (o) => `${queryProp(o, lastName) ?? ''}`,
      // title
      TT: (o) => `${queryProp(o, title) ?? ''}`,
    },
    fallback,
  });
}
