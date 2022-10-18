import { Inject, Injectable, InjectionToken } from '@angular/core';
import { parseSortOrder, SortOrder } from '@janunld/stdlib';
import { SortState } from './sort-model';

export const SORT_PARAM_PARSER_DEFAULT_ORDER = new InjectionToken<SortOrder>('SORT_PARAM_PARSER_DEFAULT_ORDER', {
  providedIn: 'root',
  factory: () => 'ascending',
});

@Injectable({ providedIn: 'root' })
export class SortParamParser {
  constructor(@Inject(SORT_PARAM_PARSER_DEFAULT_ORDER) readonly defaultOrder: SortOrder) {}

  parseParam(str: string, defaultOrder = this.defaultOrder): SortState | null {
    if (!str) return null;
    else {
      const [key, order] = str.split(',');
      return {
        key,
        order: parseSortOrder(order) ?? defaultOrder,
      };
    }
  }
}
