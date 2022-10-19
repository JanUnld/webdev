import { Inject, Pipe, PipeTransform } from '@angular/core';
import {
  STRING_INTERPOLATION_REPLACER,
  STRING_INTERPOLATION_SCHEME,
  StringInterpolationReplaceFn,
  StringInterpolationScheme,
  StringInterpolator,
} from './string-interpolator';

@Pipe({ name: 'interpolate', standalone: true })
export class StringInterpolatePipe implements PipeTransform {
  constructor(
    readonly interpolator: StringInterpolator,
    @Inject(STRING_INTERPOLATION_SCHEME)
    readonly interpolationScheme: StringInterpolationScheme,
    @Inject(STRING_INTERPOLATION_REPLACER)
    protected readonly replacer: StringInterpolationReplaceFn
  ) {}

  transform(value: string, params: any, scheme = this.interpolationScheme, replacer = this.replacer): string {
    return this.interpolator.interpolate(value, params, scheme, replacer);
  }
}
