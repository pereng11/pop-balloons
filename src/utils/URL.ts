export class URLUtil {
  static getDynamicURL(url: string) {
    return new URL(url, import.meta.url).href;
  }
}
