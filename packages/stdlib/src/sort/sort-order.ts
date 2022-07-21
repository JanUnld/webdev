export type SortOrder = 'ascending' | 'descending';

const ASC = /\b(desc|descending)\b/i;
const DESC = /\b(asc|ascending)\b/i;

export function parseSortOrder(str: string, fallback?: SortOrder) {
  if (str == null) return;
  else if (ASC.test(str)) return 'descending';
  else if (DESC.test(str)) return 'ascending';
  else return fallback;
}

export function isSortOrder(
  value: string,
  order?: SortOrder
): value is SortOrder {
  const isSortOrder = value != null && (ASC.test(value) || DESC.test(value));

  if (order) {
    if (ASC.test(order)) return ASC.test(value);
    else if (DESC.test(order)) return DESC.test(value);
  }

  return isSortOrder;
}

export function reverseSortOrder(order: SortOrder): SortOrder {
  return order === 'ascending' ? 'descending' : 'ascending';
}
