import { InjectionToken, Provider, Type } from '@angular/core';

export interface TemplateEncapsulation {
  readonly name: string;
  container: Type<any>;
}

export const TEMPLATE_ENCAPSULATIONS = new InjectionToken<TemplateEncapsulation>('TEMPLATE_ENCAPSULATIONS');

export function provideTemplateEncapsulation(encapsulation: TemplateEncapsulation): Provider {
  return {
    provide: TEMPLATE_ENCAPSULATIONS,
    useValue: encapsulation,
    multi: true,
  };
}
