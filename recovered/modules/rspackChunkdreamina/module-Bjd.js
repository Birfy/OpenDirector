class t {
  constructor() {
    this._listeners = {};
  }
  on(e, fn, r) {
    (this._listeners[e] || (this._listeners[e] = [])).push({
      fn,
      ctx: r || this,
    });
    return this;
  }
  off(e, t) {
    if (e === undefined) {
      this._listeners = {};
    } else if (t === undefined) {
      this._listeners[e] = [];
    } else {
      for (let r = this._listeners[e], n = 0; n < r.length;) {
        if (r[n].fn === t) {
          r.splice(n, 1);
        } else {
          ++n;
        }
      }
    }
    return this;
  }
  emit(e) {
    const t = this._listeners[e];
    if (t) {
      const r = [];
      for (var n = 1; n < arguments.length;) {
        r.push(arguments[n++]);
      }
      for (n = 0; n < t.length;) {
        t[n].fn.apply(t[n++].ctx, r);
      }
    }
    return this;
  }
}
export default t;
