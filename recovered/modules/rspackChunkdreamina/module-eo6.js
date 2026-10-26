if (require.j == "wl4") var a = require("./module-Vj_2.js");
if (require.j == "wl4") var o = require("./module-R3_2.js");
export class z {
  get(e) {
    let t = this._lru.get(e);
    if (t) {
      this._updateTime.set(e, Date.now() + this._timeout);
    }
    return t;
  }
  put(e, t) {
    this._startTimer();
    this._updateTime.set(e, Date.now() + this._timeout);
    return this._lru.put(e, t);
  }
  remove(e) {
    this._updateTime.delete(e);
    return this._lru.remove(e);
  }
  size() {
    return this._lru.size();
  }
  clear() {
    this._updateTime.clear();
    return this._lru.clear();
  }
  dispose() {
    this.clear();
    clearTimeout(this._timer);
  }
  _startTimer() {
    if (!this._timer) {
      this._timer = setTimeout(this._tick, this._timeout);
    }
  }
  _check() {
    let e = Date.now();
    let t = [];
    for (let [r, a] of this._updateTime) {
      if (a <= e) {
        t.push(r);
      }
    }
    for (let e of t) {
      this._updateTime.delete(e);
      this._lru.remove(e);
    }
  }
  constructor(e, t) {
    this._timeout = t;
    this._updateTime = new Map();
    this._tick = () => {
      this._check();
      if (this._lru.size() === 0) {
        this._timer = undefined;
        return;
      }
      this._timer = setTimeout(this._tick, this._timeout);
    };
    this._lru = new o.q(e);
    a.C4(
      this._lru.onEvicted((e) => {
        this._updateTime.delete(e);
      }),
    );
  }
}
