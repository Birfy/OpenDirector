export class B {
  url(e) {
    let { baseURL, domain, urlMap } = this._options;
    if (domain) {
      return `${domain === "/" ? "" : domain}${baseURL}${urlMap[e]}`;
    }
    return `${baseURL}${urlMap[e]}`;
  }
  constructor(e) {
    this._options = e;
  }
}
