export class qK {
  get(e) {
    const t = this.getCache();
    if (t.FIFO.includes(e)) {
      const n = t.data[e];
      this._resetKeyByFIFO(t, e);
      return n;
    }
  }
  set(e, t) {
    const n = this._put(e, t);
    this.db.set(this._cacheKey, n);
  }
  remove(e) {
    const t = this.getCache();
    delete t.data[e];
    this._removeKeyByFIFO(t, e);
    this.db.set(this._cacheKey, t);
  }
  getCache() {
    const e = this.db.get(this._cacheKey);
    return e || this._generateCache();
  }
  _put(e, t) {
    const n = this.getCache();
    n.data[e] = t;
    const i = this._resetKeyByFIFO(n, e);
    const length = i.FIFO.length;
    if (this._capacity !== undefined && length > this._capacity) {
      const a = i.FIFO[length - 1];
      if (a) {
        i.FIFO.pop();
        delete i.data[a];
      }
    }
    return i;
  }
  _removeKeyByFIFO(e, t) {
    const n = e.FIFO.indexOf(t);
    if (n !== -1) {
      e.FIFO.splice(n, 1);
    }
    return e;
  }
  _resetKeyByFIFO(e, t) {
    const n = this._removeKeyByFIFO(e, t);
    n.FIFO.unshift(t);
    return n;
  }
  _generateCache() {
    return {
      FIFO: [],
      data: {},
    };
  }
  constructor(e) {
    this.db = new Map();
    this._cacheKey = e._cacheKey;
    this._capacity = e._capacity;
    var { db } = e;
    if (db) {
      this.db = db;
    }
  }
}
