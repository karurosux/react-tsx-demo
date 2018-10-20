export class HttpRequest {
  public static baseURL = 'https://jsonplaceholder.typicode.com';

  public static fetch(url: string, init?: RequestInit) {
    return fetch(`${this.baseURL}${url}`, init);
  }
}
