if (require.j == "wl4") var a = require("zfw");
if (require.j == "wl4") var o = require("NY");
if (require.j == "wl4") var i = require("./module-ES_2.js");
export class s {
  has(e) {
    return new Promise((resolve, reject) => {
      let a = this._transaction.objectStore(this._storeName).openCursor(e);
      a.onerror = () => {
        reject(a.error);
      };
      a.onsuccess = () => {
        resolve(!!a.result);
      };
    });
  }
  set(e, t) {
    const r = this;
    return o._(function* () {
      let a = yield r.query(e);
      if (a) {
        t.createTime = a.createTime;
      } else {
        t.createTime = Date.now();
      }
      t.updateTime = Date.now();
      return new Promise((resolve, reject) => {
        let o = r._transaction.objectStore(r._storeName).put(t);
        o.onerror = () => {
          reject(o.error);
        };
        o.onsuccess = () => {
          resolve();
        };
      });
    })();
  }
  setMany(e) {
    let t = [];
    for (let r of e) {
      t.push(this.set(r.key, r.value));
    }
    return new Promise((resolve, reject) => {
      Promise.all(t)
        .then(() => {
          resolve();
        })
        .catch((e) => {
          reject(e);
        });
    });
  }
  delete(e) {
    return new Promise((resolve, reject) => {
      let a = this._transaction.objectStore(this._storeName).delete(e);
      a.onerror = () => {
        reject(a.error);
      };
      a.onsuccess = () => {
        resolve();
      };
    });
  }
  deleteMany(e) {
    let t = [];
    for (let r of e) {
      t.push(this.delete(r));
    }
    return new Promise((resolve, reject) => {
      Promise.all(t)
        .then(() => {
          resolve();
        })
        .catch((e) => {
          reject(e);
        });
    });
  }
  deleteByIndex(e, t, r = IDBKeyRange.only(t)) {
    let n;
    const c = this;
    return new Promise(
      ((n = o._(function* (t, o) {
        let n = c._transaction.objectStore(c._storeName).index(e);
        let l;
        let m = false;
        let s = false;
        try {
          let d;
          var u = a._(i.H(n, r));
          for (; (m = !(d = yield u.next()).done); m = false) {
            let e = d.value;
            if (!e) {
              break;
            }
            e.delete();
          }
        } catch (error) {
          s = true;
          l = error;
        } finally {
          try {
            if (m && u.return != null) {
              yield u.return();
            }
          } finally {
            if (s) {
              throw l;
            }
          }
        }
        t();
      })),
      function (e, t) {
        return n.apply(this, arguments);
      }),
    );
  }
  query(e) {
    return new Promise((resolve, reject) => {
      let a = this._transaction.objectStore(this._storeName).get(e);
      a.onerror = () => {
        reject(a.error);
      };
      a.onsuccess = () => {
        resolve(this._handleResult(a.result));
      };
    });
  }
  queryMany(e) {
    let t = new Map();
    let r = [];
    for (let a of e) {
      r.push(
        this.query(a).then((e) => {
          if (e) {
            t.set(a, e);
          }
          return e;
        }),
      );
    }
    return new Promise((resolve, reject) => {
      Promise.all(r)
        .then(() => {
          resolve(t);
        })
        .catch((e) => {
          reject(e);
        });
    });
  }
  queryByIndex(e, t, r = IDBKeyRange.only(t)) {
    let n;
    const c = this;
    return new Promise(
      ((n = o._(function* (t, o) {
        let n = c._transaction.objectStore(c._storeName).index(e);
        let l = [];
        let m;
        let s = false;
        let d = false;
        try {
          let u;
          var p = a._(i.H(n, r));
          for (; (s = !(u = yield p.next()).done); s = false) {
            let e = u.value;
            if (!e) {
              break;
            }
            l.push(e.value);
          }
        } catch (error) {
          d = true;
          m = error;
        } finally {
          try {
            if (s && p.return != null) {
              yield p.return();
            }
          } finally {
            if (d) {
              throw m;
            }
          }
        }
        t(l);
      })),
      function (e, t) {
        return n.apply(this, arguments);
      }),
    );
  }
  queryByRange(e, t) {
    let r;
    const n = this;
    return new Promise(
      ((r = o._(function* (r, o) {
        let c = n._transaction.objectStore(n._storeName).index(e);
        let l = [];
        let m;
        let s = false;
        let d = false;
        try {
          let u;
          var p = a._(i.H(c, t));
          for (; (s = !(u = yield p.next()).done); s = false) {
            let e = u.value;
            if (!e) {
              break;
            }
            l.push(e.value);
          }
        } catch (error) {
          d = true;
          m = error;
        } finally {
          try {
            if (s && p.return != null) {
              yield p.return();
            }
          } finally {
            if (d) {
              throw m;
            }
          }
        }
        r(l);
      })),
      function (e, t) {
        return r.apply(this, arguments);
      }),
    );
  }
  queryByConditions(e) {
    let t;
    const r = this;
    return new Promise(
      ((t = o._(function* (t, o) {
        let n = r._transaction.objectStore(r._storeName);
        let c = [];
        let l;
        let m = false;
        let s = false;
        try {
          let d;
          var u = a._(i.H(n, null));
          for (; (m = !(d = yield u.next()).done); m = false) {
            let t = d.value;
            if (!t) {
              break;
            }
            if (e(t.value)) {
              c.push(t.value);
            }
          }
        } catch (error) {
          s = true;
          l = error;
        } finally {
          try {
            if (m && u.return != null) {
              yield u.return();
            }
          } finally {
            if (s) {
              throw l;
            }
          }
        }
        t(c);
      })),
      function (e, r) {
        return t.apply(this, arguments);
      }),
    );
  }
  clear() {
    return new Promise((resolve, reject) => {
      let r = this._transaction.objectStore(this._storeName).clear();
      r.onerror = () => {
        reject(r.error);
      };
      r.onsuccess = () => {
        resolve();
      };
    });
  }
  _handleResult(e) {
    if (
      e &&
      (e.maxAge === undefined || !(e.updateTime + e.maxAge < Date.now()))
    ) {
      return e;
    }
  }
  constructor(e, t) {
    this._transaction = e;
    this._storeName = t;
  }
}
