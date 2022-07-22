import { queryProp } from '../../json/query-prop';
import { format as _format } from '../format';

/**
 * Formats any object containing address information into a string. The string format can be provided
 * using the following tokens. If no format is present the pipe will default to "full". Additionally
 * any field can be backed up with a fallback value
 *
 * **Format Tokens:**
 *
 * | Token  | Description                        |
 * | ------ | ---------------------------------- |
 * | `sss`  | The street name of the address     |
 * | `NN`   | The street number of the address   |
 * | `aaa`  | The address addition (if given)    |
 * | `ZZ`   | The address zip code               |
 * | `ccc`  | The city of the address            |
 *
 * **Format Aliases:**
 *
 * | Alias       | Format               |
 * | ----------- | -------------------- |
 * | `full`      | `sss NN aaa, ZZ ccc` |
 * | `street`    | `sss NN`             |
 * | `city`      | `zz ccc`             |
 * <br>
 *
 * @example ```typescript
 * formatPostalAddress(obj, 'street') // Foo St. 42a
 * ```
 *
 * @param obj     The object value to select the name information from
 * @param format  The desired format to use for the output string value. Defaults to "full"
 * @param options Optional parameters that can be used during the format operation
 */
export function formatPostalAddress<T>(
  obj: T,
  format = 'full',
  options?: {
    street?: ((obj: T) => string) | PropertyKey[] | string;
    streetNumber?: ((obj: T) => string) | PropertyKey[] | string;
    additional?: ((obj: T) => string) | PropertyKey[] | string;
    city?: ((obj: T) => string) | PropertyKey[] | string;
    zip?: ((obj: T) => string) | PropertyKey[] | string;
    fallback?: T;
  }
): string {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const optimisticStreetSplit = (v: any) => v?.toString().split(/\s+/);
  const {
    street = (o: any) => o.streetName ?? optimisticStreetSplit(o.street)?.[0],
    streetNumber = (o: any) =>
      o.streetNumber ?? optimisticStreetSplit(o.street)?.[1],
    additional = (o: any) => o.addition ?? o.additional,
    city = (o: any) => o.cityName ?? o.city,
    zip = (o: any) => o.zipCode ?? o.zip,
    fallback,
  } = options ?? {};
  /* eslint-enable @typescript-eslint/no-explicit-any */

  switch (format) {
    case 'street':
      format = 'sss NN';
      break;
    case 'full':
      format = 'sss NN aaa, ZZ ccc';
      break;
    case 'city':
      format = 'ZZ ccc';
      break;
  }

  return _format(obj, {
    pattern: format,
    tokens: {
      sss: (o) => queryProp(o, street),
      NN: (o) => queryProp(o, streetNumber),
      aaa: (o) => queryProp(o, additional),
      ccc: (o) => queryProp(o, city),
      ZZ: (o) => queryProp(o, zip),
    },
    fallback,
  }).replace(/\s+,/, ',');
}
