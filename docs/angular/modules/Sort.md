[@janunld/angular](../README.md) / [Exports](../modules.md) / Sort

# Module: Sort

Sort groups do **not** provide any sorting functionality! They only exist to manage and
project sort states onto a view. They may be combined with either a client sided or server sided sort
functionality. For client sided filtering you can take a look at the `PropertySort` implementation.

```html
<!-- sort group with multiple states being set, must allow multiple tho, can also contain orders -->
<table
  [sortGroup]="[ 'lastName,asc', 'dateOfBirth' ]"
  sortGroupAllowsMultiple="true"
  sortGroupEmitInitChange="false"
  sortGroupPreferredOrder="descending"
  (sortGroupChanges)="onSortGroupChange($event)"
  #sortGroup="sortGroup"
>
  <tr>
    <!-- sort default order through value format -->
    <th sort="lastName,asc">Name</th>
    <th sort="dateOfBirth" sortPreferredOrder="ascending" sortCanUnset="true" (sortChanges)="onSortChange($event)">
      Birthdate
    </th>
  </tr>
  <tr *ngFor="let person of persons">
    <td>{{ person | fullName: 'reversed' }}</td>
    <td>{{ person.dateOfBirth | date: 'short' }}</td>
  </tr>
</table>
```

## Table of contents

### Classes

- [SortGroup](../classes/Sort.SortGroup.md)
- [SortModel](../classes/Sort.SortModel.md)
- [SortModule](../classes/Sort.SortModule.md)
- [SortParamParser](../classes/Sort.SortParamParser.md)
- [SortToggle](../classes/Sort.SortToggle.md)

### Interfaces

- [SortActionOptions](../interfaces/Sort.SortActionOptions.md)
- [SortModelChange](../interfaces/Sort.SortModelChange.md)
- [SortState](../interfaces/Sort.SortState.md)

### Type Aliases

- [ReadonlySortModel](Sort.md#readonlysortmodel)
- [SortGroupOptions](Sort.md#sortgroupoptions)
- [SortModelAction](Sort.md#sortmodelaction)

### Variables

- [SORT_GROUP_OPTIONS](Sort.md#sort_group_options)
- [SORT_PARAM_PARSER_DEFAULT_ORDER](Sort.md#sort_param_parser_default_order)

## Type Aliases

### ReadonlySortModel

**ReadonlySortModel**: `Omit`<[`SortModel`](../classes/Sort.SortModel.md), `"set"` \| `"unset"`\>

---

### SortGroupOptions

**SortGroupOptions**: `Partial`<`Pick`<[`SortGroup`](../classes/Sort.SortGroup.md), `"emitInitChange"` \| `"allowsMultiple"` \| `"preferredOrder"`\>\>

---

### SortModelAction

**SortModelAction**: `"set"` \| `"unset"`

## Variables

### SORT_GROUP_OPTIONS

`Const` **SORT_GROUP_OPTIONS**: `InjectionToken`<`Partial`<`Pick`<[`SortGroup`](../classes/Sort.SortGroup.md), `"allowsMultiple"` \| `"emitInitChange"` \| `"preferredOrder"`\>\>\>

---

### SORT_PARAM_PARSER_DEFAULT_ORDER

`Const` **SORT_PARAM_PARSER_DEFAULT_ORDER**: `InjectionToken`<`SortOrder`\>
