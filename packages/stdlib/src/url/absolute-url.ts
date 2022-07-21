import { normalizeUrl } from './normalize-url';

export function isAbsoluteURL(url: string): boolean {
  return !!url && (url.indexOf('://') > 0 || url.indexOf('//') === 0);
}

/**
 * Normalizes a host url string value enforcing a valid protocol and an optional path appendix
 *
 * @remarks Host urls are absolute urls! This function does not support relative url values
 */
export function normalizeHostUrl(
  host: string,
  options?: { path?: string; ssl?: boolean }
): string {
  const path = options?.path;

  if (path != null && !new RegExp(`${path}$`).test(host)) {
    host = `${host}/${path}`;
  }

  if (!/^https?:\/{2}/.test(host)) {
    if (options?.ssl !== false) host = `https://${host}`;
    else host = `http://${host}`;
  }

  return normalizeUrl(host);
}
