import { InjectionToken } from '@angular/core';

export const FORM_ERROR_COMPONENT = new InjectionToken<any>('FORM_ERROR_COMPONENT');

export const FORM_PENDING_COMPONENT = new InjectionToken<any>('FORM_PENDING_COMPONENT');

export const FORM_VALID_COMPONENT = new InjectionToken<any>('FORM_VALID_COMPONENT');

export type FormErrorMessageFactory = (params: any) => string;

export interface FormErrorMessages {
  [errorCode: string]: FormErrorMessageFactory | string;
}

export const FORM_ERROR_MESSAGES = new InjectionToken<FormErrorMessages>('FORM_ERROR_MESSAGES');

export function provideFormErrorMessages(messages: FormErrorMessages) {
  return { provide: FORM_ERROR_MESSAGES, useValue: messages };
}
