export class Ks {
  combineConfig(e) {
    this._config = {
      ...this._config,
      ...e,
    };
  }
  get config() {
    return this._config;
  }
  set hasMore(e) {
    this._hasMore = e;
  }
  get hasMore() {
    return this._hasMore;
  }
  set offset(e) {
    this._offset = e;
  }
  get offset() {
    return this._offset;
  }
  set searchId(e) {
    this._searchId = e;
  }
  get searchId() {
    let e;
    if ((e = this._searchId) != null) {
      return e;
    }
    return "";
  }
  set requestId(e) {
    this._requestId = e;
  }
  get requestId() {
    let e;
    if ((e = this._requestId) != null) {
      return e;
    }
    return "";
  }
  set logId(e) {
    this._logId = e;
  }
  get logId() {
    let e;
    if ((e = this._logId) != null) {
      return e;
    }
    return "";
  }
  set canSearchDeeper(e) {
    this._canSearchDeeper = e;
  }
  get canSearchDeeper() {
    return this._canSearchDeeper;
  }
  constructor(e, t, r) {
    this._config = {};
    this.value = e;
    this._hasMore = t.hasMore;
    this._offset = t.offset;
    this._searchId = t.searchId;
    this._canSearchDeeper = t.canSearchDeeper;
    this._requestId = t.requestId;
    this._logId = t.logId;
    this.combineConfig(r != null ? r : {});
  }
}
export function yC(
  e,
  t,
  r = {
    hasMore: true,
    offset: 0,
  },
) {
  return new Ks(t, r, e);
}
export function CM(e) {
  return e instanceof Ks;
}
