/**
 * Sort groups do **not** provide any sorting functionality! They only exist to manage and
 * project sort states onto a view. They may be combined with either a client sided or server sided sort
 * functionality. For client sided filtering you can take a look at the `PropertySort` implementation.
 *
 * @example ```html
 * <!-- sort group with multiple states being set, must allow multiple tho, can also contain orders -->
 * <table [sortGroup]="[ 'lastName,asc', 'dateOfBirth' ]"
 *   sortGroupAllowsMultiple="true"
 *   sortGroupEmitInitChange="false"
 *   sortGroupPreferredOrder="descending"
 *   (sortGroupChanges)="onSortGroupChange($event)"
 *   #sortGroup="sortGroup">
 *
 *   <tr>
 *     <!-- sort default order through value format -->
 *     <th sort="lastName,asc">Name</th>
 *     <th sort="dateOfBirth"
 *       sortPreferredOrder="ascending"
 *       sortCanUnset="true"
 *       (sortChanges)="onSortChange($event)">
 *       Birthdate
 *     </th>
 *   </tr>
 *   <tr *ngFor="let person of persons">
 *     <td>{{ person | fullName: 'reversed' }}</td>
 *     <td>{{ person.dateOfBirth | date: 'short' }}</td>
 *   </tr>
 * </table>
 * ```
 *
 * @module Sort
 */
export * from './sort-group';
export * from './sort-model';
export * from './sort-param-parser';
export * from './sort-toggle';
export * from './module';
