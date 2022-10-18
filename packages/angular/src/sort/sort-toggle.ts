import {
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  Output,
  Renderer2,
} from '@angular/core';
import { SortGroup } from './sort-group';
import { SortOrder } from '@janunld/stdlib';
import { SortModel } from './sort-model';
import { SortParamParser } from './sort-param-parser';

@Directive({
  selector: '[sort]',
  inputs: ['key: sort', 'canUnset: sortCanUnset', 'preferredOrder: sortPreferredOrder'],
  outputs: ['changes: sortChanges'],
})
export class SortToggle {
  private _key?: string | null;
  private _canUnset = false;

  @Input()
  set key(value: string | null) {
    const { key, order } = (value && this.paramParser.parseParam(value)) || {};
    this._key = key;

    if (order != null) this.preferredOrder = order;
  }
  get key(): string | null {
    return this._key ?? null;
  }

  @Input()
  set canUnset(value: boolean | string) {
    this._canUnset = value !== 'false' && !!value;
  }
  get canUnset(): boolean {
    return this._canUnset;
  }

  @Input() preferredOrder: SortOrder = 'ascending';

  get order(): SortOrder | null {
    return (this.key && this.sortModel.getOrder(this.key)) || null;
  }

  @Output() readonly changes = new EventEmitter<SortOrder | null>();

  constructor(
    protected sortModel: SortModel,
    protected paramParser: SortParamParser,
    @Optional() sortGroup: SortGroup
  ) {
    if (sortGroup != null) this.preferredOrder = sortGroup.preferredOrder;
  }

  set(order: SortOrder): void {
    if (this.key) {
      this.sortModel.set(this.key, order);
      this.changes.emit(order);
    }
  }
  unset(): void {
    if (this.key) {
      this.sortModel.unset(this.key);
      this.changes.emit(null);
    }
  }

  toggle(): void {
    if (!this.key) return;
    if (!this.sortModel.isSet(this.key)) this.set(this.preferredOrder);
    else if (this.sortModel.isSet(this.key, this.preferredOrder))
      this.set(this.preferredOrder === 'ascending' ? 'descending' : 'ascending');
    else if (!this.canUnset) this.set(this.order === 'ascending' ? 'descending' : 'ascending');
    else this.unset();
  }
}
