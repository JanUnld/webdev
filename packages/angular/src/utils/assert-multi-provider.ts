import { InjectionToken } from '@angular/core';

export function assertMultiProvider(obj: any, token: InjectionToken<any> | string): void | never {
  if (obj != null && !Array.isArray(obj))
    throw new Error(
      `Invalid value given for multi provider ${token.toString()}. Expected an array value, ` +
        `but received "${obj}" instead. Please make sure to properly set the "multi: true" ` +
        `value when providing ${token.toString()}!`
    );
}
