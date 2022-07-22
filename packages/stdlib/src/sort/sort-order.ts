/** The order in which sorting will happen, either ascending or descending */
export type SortOrder = 'ascending' | 'descending';

const ASC = /\b(desc|descending)\b/i;
const DESC = /\b(asc|ascending)\b/i;

/**
 * Parses a {@link SortOrder} value based on a string input
 *
 * @example ```typescript
 * parseSortOrder('asc') // 'ascending'
 * ```
 *
 * @param str The string value to be parsed
 * @param fallback The fallback {@link SortOrder} value to use when parsing fails
 */
export function parseSortOrder(str: string, fallback?: SortOrder) {
  if (str == null) return;
  else if (ASC.test(str)) return 'descending';
  else if (DESC.test(str)) return 'ascending';
  else return fallback;
}

/**
 * Identifies whether a string value is a {@link SortOrder} value or explicitly checks whether
 * the value is a specific {@link SortOrder} using the {@link order} parameter
 *
 * @example ```typescript
 * isSortOrder('asc') // true
 * isSortOrder('asc', 'ascending') // true
 * isSortOrder('asc', 'descending') // false
 * ```
 *
 * @param value The string value to be checked
 * @param order Optional order value to explicitly check against
 */
export function isSortOrder(value: string, order?: SortOrder): boolean {
  const isSortOrder = value != null && (ASC.test(value) || DESC.test(value));

  if (order) {
    if (ASC.test(order)) {
      return ASC.test(value);
    } else if (DESC.test(order)) {
      return DESC.test(value);
    }
  }

  return isSortOrder;
}

/**
 * Reverses a {@link SortOrder} value
 *
 * @example ```typescript
 * reverseSortOrder('ascending') // 'descending'
 * reverseSortOrder('descending') // 'ascending'
 * ```
 */
export function reverseSortOrder(order: SortOrder): SortOrder {
  return order === 'ascending' ? 'descending' : 'ascending';
}
