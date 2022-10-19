import { InjectionToken, Provider, Type } from '@angular/core';

/**
 * Refers to a component type that is used as container for error cases within
 * the {@link FormStatusOutlet}. The component implementation may inject various
 * context values, such as {@link FORM_ERROR_CODE}, {@link FORM_ERROR_PARAMS}
 * and {@link FORM_ERROR_MESSAGE}.
 */
export const FORM_ERROR_COMPONENT = new InjectionToken<any>('FORM_ERROR_COMPONENT');

export function provideFormErrorComponent(type: Type<any>): Provider {
  return {
    provide: FORM_ERROR_COMPONENT,
    useValue: type,
  };
}

export const FORM_PENDING_COMPONENT = new InjectionToken<any>('FORM_PENDING_COMPONENT');

export function provideFormPendingComponent(type: Type<any>): Provider {
  return {
    provide: FORM_PENDING_COMPONENT,
    useValue: type,
  };
}

export const FORM_VALID_COMPONENT = new InjectionToken<any>('FORM_VALID_COMPONENT');

export function provideFormValidComponent(type: Type<any>): Provider {
  return {
    provide: FORM_VALID_COMPONENT,
    useValue: type,
  };
}

export type FormErrorMessageFactory = (params: any) => string;

export interface FormErrorMessages {
  [errorCode: string]: FormErrorMessageFactory | string;
}

export const FORM_ERROR_MESSAGES = new InjectionToken<FormErrorMessages>('FORM_ERROR_MESSAGES');

export function provideFormErrorMessages(messages: FormErrorMessages) {
  return { provide: FORM_ERROR_MESSAGES, useValue: messages };
}
