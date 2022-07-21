import { parseSortOrder, SortOrder } from './sort-order';

export type SortComparator<T> = (a: T, b: T) => number;

export class Sort<T = any> {
  constructor(
    public comparator: SortComparator<T>,
    public defaultOrder?: SortOrder
  ) {}

  apply(
    data: Iterable<T>,
    order: SortOrder | undefined = this.defaultOrder
  ): T[] {
    const sortedData = Array.from(data).sort(this.comparator);
    const isDefaultOrder = this.defaultOrder === order;
    if (isDefaultOrder) {
      return sortedData;
    } else {
      return sortedData.reverse();
    }
  }
}

export function parseSortState(str: string) {
  if (str == null) return null;
  else {
    const [key, order] = str.split(',');
    if (!key.trim() || !order?.trim()) return;
    return {
      key,
      order: parseSortOrder(order),
    };
  }
}
