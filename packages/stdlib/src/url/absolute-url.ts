import { normalizeUrl } from './normalize-url';

const URL_REGEX =
  /^([\w.-]+?:\/{2})?(\d+\.\d+\.\d+\.\d+|[\w.-]+\.\w+|localhost)(:\d+)?/i;

export function isAbsoluteURL(url: string): boolean {
  return !!url && URL_REGEX.test(url);
}

/**
 * Normalizes an absolute url string value enforcing a protocol and an optional
 * path appendix. The protocol option will default to `https` if not overwritten
 *
 * @remarks This function does not support relative url values
 */
export function normalizeAbsoluteUrl(
  url: string,
  options?: { path?: string; protocol?: string }
): string {
  const { path, protocol } = options || {};

  if (path != null && !new RegExp(`${path}$`).test(url)) {
    url = `${url}/${path}`;
  }

  if (!isAbsoluteURL(url)) {
    if (!protocol) url = `https://${url}`;
    else url = `${protocol}://${url}`;
  }

  return normalizeUrl(url);
}
