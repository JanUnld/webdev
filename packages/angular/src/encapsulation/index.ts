/**
 * ```typescript
 * Component({
 *   selector: 'paragraph',
 *   template: `<ng-content></ng-content>`
 * })(class ParagraphComponent { })
 *
 * export const PARAGRAPH_ENCAPSULATION_PROVIDER: Provider = {
 *   provide: TEMPLATE_ENCAPSULATIONS,
 *   useValue: { name: 'p', container: ParagraphComponent },
 *   multi: true
 * };
 * ```
 *
 * ```html
 * <ng-container *encapsulate="'p'">Hello World!</ng-container>
 * ```
 *
 * ```html
 * <paragraph>Hello World!</paragraph>
 * ```
 *
 * @module Encapsulation
 */
export * from './template-encapsulate';
export * from './template-encapsulation';
export * from './module';
