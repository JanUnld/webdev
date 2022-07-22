/**
 * Normalizes an url string value enforcing consistent single slash usage
 *
 * @example ```typescript
 * normalizeUrl('https://localhost:8080///relative//url') // https://localhost:8080/relative/url
 * normalizeUrl('///relative//url') // /relative/url
 * ```
 *
 * @param segments One or more url segments to be normalized into one value
 */
export function normalizeUrl(...segments: string[]): string {
  // replace any double slash occurrences apart from those being part
  // of any potential protocol declaration
  return segments.join('/').replace(/(?<![\w.-]+:)\/{2,}/, '/');
}
