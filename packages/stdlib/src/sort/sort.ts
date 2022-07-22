import { SortOrder } from './sort-order';

/** Basic sort mechanism implementation meant to be extended. May also be used as-is */
export class Sort<T> {
  /**
   * @param comparator The comparator function to be used to sort
   * @param defaultOrder The default order the comparator function implicitly enforces
   */
  constructor(
    public comparator: (a: T, b: T) => number,
    public defaultOrder?: SortOrder
  ) {}

  /**
   * Sorts the input data based on the set {@link comparator} and {@link defaultOrder}. Ordering may also
   * be customized in line using the {@link order} parameter
   *
   * @param data The desired data to be sorted
   * @param order The order to enforce during the sort
   */
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
