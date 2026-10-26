if (require.j == "wl4") var a = require("./module-A7.js");
export class q {
  get onEvicted() {
    if (!this._onEvicted) {
      this._onEvicted = new a.v();
    }
    return this._onEvicted.event;
  }
  get(e) {
    let t = this._cache.get(e);
    if (t) {
      this._cache.delete(e);
      this._cache.set(e, t);
    }
    return t;
  }
  put(e, t) {
    if (this._cache.has(e)) {
      this._cache.delete(e);
    } else if (this._cache.size >= this._capacity) {
      let r;
      let e = this._cache.keys().next().value;
      let t = this._onEvicted ? this._cache.get(e) : null;
      this._cache.delete(e);
      if ((r = this._onEvicted) != null) {
        r.fire(e, t);
      }
    }
    this._cache.set(e, t);
  }
  remove(e) {
    if (this._cache.get(e)) {
      this._cache.delete(e);
    }
  }
  size() {
    return this._cache.size;
  }
  clear() {
    this._cache.clear();
  }
  constructor(e) {
    this._capacity = e;
    this._cache = new Map();
  }
}
