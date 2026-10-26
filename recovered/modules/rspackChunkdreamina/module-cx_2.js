import r from "cac";
class n {
  getEventParams() {
    return {
      before: this._params.before,
      after: this._params.after,
      page: this._params.page,
      url_path: this._params.urlPath,
    };
  }
  constructor(e) {
    this._params = e;
    this.eventName = "category_enter";
  }
}
class a {
  getEventParams() {
    return {
      before: this._params.before,
      after: this._params.after,
      category_name: this._params.categoryName,
      page: this._params.page,
      url_path: this._params.urlPath,
    };
  }
  constructor(e) {
    this._params = e;
    this.eventName = "subcategory_enter";
  }
}
export function B(e, t) {
  r.PQ(e, n, [t]);
}
export function p(e, t) {
  r.PQ(e, a, [t]);
}
