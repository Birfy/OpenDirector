import c from "QWK";
import { _ as __1 } from "./module-Kt_2.js";
import m from "NY";
import { TZ, nj } from "./module-K8.js";
import { Dz, Hs, TG, Um, dT, nu, oP, pw, qd, rt, sZ, se } from "./module-O4.js";
import { s } from "./module-i0h.js";
import { u } from "./module-dm_2.js";
let a;
let o;
let i;
let n;
function C(e, t, r) {
  let a;
  let r_value = r.value;
  a = m._(function* (t, ...r) {
    let a = yield e.reopenDatabase.apply(t);
    if (a.ok) {
      return r_value.apply(t, r);
    }
    return a;
  });
  let i = function (e) {
    return a.apply(this, arguments);
  };
  r.value = m._(function* (...t) {
    let r = yield r_value.apply(this, t);
    if (r.ok || !r.cause) {
      return r;
    }
    switch (r.cause.name) {
      case "QuotaExceededError": {
        e.readyCleanup.apply(this);
        yield u(500);
        let a = yield i(this, ...t);
        if (!a.ok) {
          return r;
        }
        return a;
      }
      case "InvalidStateError": {
        let e = yield i(this, ...t);
        if (!e.ok) {
          return r;
        }
        return e;
      }
      default:
        return r;
    }
  });
  return r;
}
class v {
  set(e, t, r) {
    let a;
    const o = this;
    return new Promise(
      ((a = m._(function* (a) {
        try {
          let i = o._database.transaction(o._storeName, "readwrite", r);
          i.onabort = () => {
            a(pw(i.error));
          };
          i.onerror = () => {
            a(pw(i.error));
          };
          i.oncomplete = () => {
            a(nj());
          };
          let n = new s(i, o._storeName);
          yield n.set(e, t);
          if (i.commit) {
            i.commit();
          }
        } catch (error) {
          a(pw(error));
        }
      })),
      function (e) {
        return a.apply(this, arguments);
      }),
    );
  }
  setMany(e, t) {
    let r;
    const a = this;
    return new Promise(
      ((r = m._(function* (r) {
        try {
          let o = a._database.transaction(a._storeName, "readwrite", t);
          o.onabort = () => {
            r(pw(o.error));
          };
          o.onerror = () => {
            r(pw(o.error));
          };
          o.oncomplete = () => {
            r(nj());
          };
          let i = new s(o, a._storeName);
          yield i.setMany(e);
          if (o.commit) {
            o.commit();
          }
        } catch (error) {
          r(pw(error));
        }
      })),
      function (e) {
        return r.apply(this, arguments);
      }),
    );
  }
  delete(e, t) {
    let r;
    const a = this;
    return new Promise(
      ((r = m._(function* (r) {
        try {
          let o = a._database.transaction(a._storeName, "readwrite", t);
          o.onabort = () => {
            r(se(o.error));
          };
          o.onerror = () => {
            r(se(o.error));
          };
          o.oncomplete = () => {
            r(nj());
          };
          let i = new s(o, a._storeName);
          yield i.delete(e);
          if (o.commit) {
            o.commit();
          }
        } catch (error) {
          r(se(error));
        }
      })),
      function (e) {
        return r.apply(this, arguments);
      }),
    );
  }
  deleteMany(e, t) {
    let r;
    const a = this;
    return new Promise(
      ((r = m._(function* (r) {
        try {
          let o = a._database.transaction(a._storeName, "readwrite", t);
          o.onabort = () => {
            r(se(o.error));
          };
          o.onerror = () => {
            r(se(o.error));
          };
          o.oncomplete = () => {
            r(nj());
          };
          let i = new s(o, a._storeName);
          yield i.deleteMany(e);
          if (o.commit) {
            o.commit();
          }
        } catch (error) {
          r(se(error));
        }
      })),
      function (e) {
        return r.apply(this, arguments);
      }),
    );
  }
  deleteByIndex(e, t, r) {
    let a;
    const o = this;
    return new Promise(
      ((a = m._(function* (a) {
        try {
          let i = o._database.transaction(o._storeName, "readwrite", r);
          i.onabort = () => {
            a(se(i.error));
          };
          i.onerror = () => {
            a(se(i.error));
          };
          i.oncomplete = () => {
            a(nj());
          };
          let n = new s(i, o._storeName);
          yield n.deleteByIndex(e, t, r == null ? undefined : r.range);
          if (i.commit) {
            i.commit();
          }
        } catch (error) {
          a(se(error));
        }
      })),
      function (e) {
        return a.apply(this, arguments);
      }),
    );
  }
  query(e, t) {
    let r;
    const a = this;
    return new Promise(
      ((r = m._(function* (r) {
        try {
          let o = a._database.transaction(a._storeName, "readonly", t);
          o.onabort = () => {
            r(rt(o.error));
          };
          o.onerror = () => {
            r(rt(o.error));
          };
          let i = new s(o, a._storeName);
          let n = yield i.query(e);
          if (o.commit) {
            o.commit();
          }
          r(TZ(n));
        } catch (error) {
          r(rt(error));
        }
      })),
      function (e) {
        return r.apply(this, arguments);
      }),
    );
  }
  queryMany(e, t) {
    let r;
    const a = this;
    return new Promise(
      ((r = m._(function* (r) {
        try {
          let o = a._database.transaction(a._storeName, "readonly", t);
          o.onabort = () => {
            r(rt(o.error));
          };
          o.onerror = () => {
            r(rt(o.error));
          };
          let i = new s(o, a._storeName);
          let n = yield i.queryMany(e);
          if (o.commit) {
            o.commit();
          }
          r(TZ(n));
        } catch (error) {
          r(rt(error));
        }
      })),
      function (e) {
        return r.apply(this, arguments);
      }),
    );
  }
  queryByIndex(e, t, r) {
    let a;
    const o = this;
    return new Promise(
      ((a = m._(function* (a) {
        try {
          let i = o._database.transaction(o._storeName, "readonly", r);
          i.onabort = () => {
            a(rt(i.error));
          };
          i.onerror = () => {
            a(rt(i.error));
          };
          let n = new s(i, o._storeName);
          let c = yield n.queryByIndex(e, t, r == null ? undefined : r.range);
          if (i.commit) {
            i.commit();
          }
          a(TZ(c));
        } catch (error) {
          a(rt(error));
        }
      })),
      function (e) {
        return a.apply(this, arguments);
      }),
    );
  }
  queryByConditions(e, t) {
    let r;
    const a = this;
    return new Promise(
      ((r = m._(function* (r) {
        try {
          let o = a._database.transaction(a._storeName, "readonly", t);
          o.onabort = () => {
            r(rt(o.error));
          };
          o.onerror = () => {
            r(rt(o.error));
          };
          let i = new s(o, a._storeName);
          let n = yield i.queryByConditions(e);
          if (o.commit) {
            o.commit();
          }
          r(TZ(n));
        } catch (error) {
          r(rt(error));
        }
      })),
      function (e) {
        return r.apply(this, arguments);
      }),
    );
  }
  clear(e) {
    let t;
    const r = this;
    return new Promise(
      ((t = m._(function* (t) {
        try {
          let a = r._database.transaction(r._storeName, "readwrite", e);
          a.onabort = () => {
            t(qd(a.error));
          };
          a.onerror = () => {
            t(qd(a.error));
          };
          a.oncomplete = () => {
            t(nj());
          };
          let o = new s(a, r._storeName);
          yield o.clear();
          if (a.commit) {
            a.commit();
          }
        } catch (error) {
          t(qd(error));
        }
      })),
      function (e) {
        return t.apply(this, arguments);
      }),
    );
  }
  reopenDatabase() {
    const e = this;
    return m._(function* () {
      try {
        e._database = yield e._databasePool.getDatabase(e._database.name);
        return nj();
      } catch (error) {
        return Hs(error);
      }
    })();
  }
  readyCleanup() {
    this._cleanupMgr.mark();
  }
  constructor(e, t, r, a) {
    this._database = e;
    this._storeName = t;
    this._databasePool = r;
    this._cleanupMgr = a;
  }
}
c.Cg(
  [
    C,
    c.Sn("design:type", Function),
    c.Sn("design:paramtypes", [
      String,
      typeof T === "undefined" ? Object : T,
      typeof IDataBaseTransactionOptions === "undefined"
        ? Object
        : IDataBaseTransactionOptions,
    ]),
    c.Sn(
      "design:returntype",
      typeof Promise === "undefined" ? Object : Promise,
    ),
  ],
  v.prototype,
  "set",
  null,
);
c.Cg(
  [
    C,
    c.Sn("design:type", Function),
    c.Sn("design:paramtypes", [
      Array,
      typeof IDataBaseTransactionOptions === "undefined"
        ? Object
        : IDataBaseTransactionOptions,
    ]),
    c.Sn(
      "design:returntype",
      typeof Promise === "undefined" ? Object : Promise,
    ),
  ],
  v.prototype,
  "setMany",
  null,
);
c.Cg(
  [
    C,
    c.Sn("design:type", Function),
    c.Sn("design:paramtypes", [
      String,
      typeof IDataBaseTransactionOptions === "undefined"
        ? Object
        : IDataBaseTransactionOptions,
    ]),
    c.Sn(
      "design:returntype",
      typeof Promise === "undefined" ? Object : Promise,
    ),
  ],
  v.prototype,
  "delete",
  null,
);
c.Cg(
  [
    C,
    c.Sn("design:type", Function),
    c.Sn("design:paramtypes", [
      Array,
      typeof IDataBaseTransactionOptions === "undefined"
        ? Object
        : IDataBaseTransactionOptions,
    ]),
    c.Sn(
      "design:returntype",
      typeof Promise === "undefined" ? Object : Promise,
    ),
  ],
  v.prototype,
  "deleteMany",
  null,
);
c.Cg(
  [
    C,
    c.Sn("design:type", Function),
    c.Sn("design:paramtypes", [String, Object, Object]),
    c.Sn(
      "design:returntype",
      typeof Promise === "undefined" ? Object : Promise,
    ),
  ],
  v.prototype,
  "deleteByIndex",
  null,
);
c.Cg(
  [
    C,
    c.Sn("design:type", Function),
    c.Sn("design:paramtypes", [
      String,
      typeof IDataBaseTransactionOptions === "undefined"
        ? Object
        : IDataBaseTransactionOptions,
    ]),
    c.Sn(
      "design:returntype",
      typeof Promise === "undefined" ? Object : Promise,
    ),
  ],
  v.prototype,
  "query",
  null,
);
c.Cg(
  [
    C,
    c.Sn("design:type", Function),
    c.Sn("design:paramtypes", [
      Array,
      typeof IDataBaseTransactionOptions === "undefined"
        ? Object
        : IDataBaseTransactionOptions,
    ]),
    c.Sn(
      "design:returntype",
      typeof Promise === "undefined" ? Object : Promise,
    ),
  ],
  v.prototype,
  "queryMany",
  null,
);
c.Cg(
  [
    C,
    c.Sn("design:type", Function),
    c.Sn("design:paramtypes", [String, Object, Object]),
    c.Sn(
      "design:returntype",
      typeof Promise === "undefined" ? Object : Promise,
    ),
  ],
  v.prototype,
  "queryByIndex",
  null,
);
c.Cg(
  [
    C,
    c.Sn("design:type", Function),
    c.Sn("design:paramtypes", [
      Function,
      typeof IDataBaseTransactionOptions === "undefined"
        ? Object
        : IDataBaseTransactionOptions,
    ]),
    c.Sn(
      "design:returntype",
      typeof Promise === "undefined" ? Object : Promise,
    ),
  ],
  v.prototype,
  "queryByConditions",
  null,
);
c.Cg(
  [
    C,
    c.Sn("design:type", Function),
    c.Sn("design:paramtypes", [
      typeof IDataBaseTransactionOptions === "undefined"
        ? Object
        : IDataBaseTransactionOptions,
    ]),
    c.Sn(
      "design:returntype",
      typeof Promise === "undefined" ? Object : Promise,
    ),
  ],
  v.prototype,
  "clear",
  null,
);
const _ = require("zfw");
const f = require("./module-kBz.js");
const h = require("./module-ES_2.js");
a = i || (i = {});
a[(a.Idle = 0)] = "Idle";
a[(a.Running = 1)] = "Running";
o = n || (n = {});
o[(o.Minor = 0)] = "Minor";
o[(o.Major = 1)] = "Major";
class S {
  mark() {
    if (!this._mark) {
      this._mark = true;
      f.V(() => {
        this.cleanup();
      });
    }
  }
  cleanup() {
    this._mark = false;
    if (this._status === 1) {
      return Promise.resolve(nj());
    }
    this._status = 1;
    return this._cleanup();
  }
  _calcType() {
    return +((this._times = this._times % 3), this._times++ == 3);
  }
  _cleanup() {
    const e = this;
    return m._(function* () {
      let t;
      t = e._calcType() === 0 ? 0.5 : 1;
      try {
        yield e._cleanupDatabases(t);
        return nj();
      } catch (error) {
        return Dz(error);
      } finally {
        e._status = 0;
      }
    })();
  }
  _getCount(e) {
    return new Promise((resolve, reject) => {
      let a = e.count();
      a.onsuccess = () => {
        resolve(a.result);
      };
      a.onerror = (e) => {
        reject(e);
      };
    });
  }
  _cleanupTable(e, t, r) {
    let a;
    const o = this;
    return new Promise(
      ((a = m._(function* (a, i) {
        let n = e.transaction(t, "readwrite");
        let c = n.objectStore(t);
        if (!c.indexNames.contains("updateTime")) {
          return void a();
        }
        n.onabort = () => {
          i(n.error);
        };
        n.onerror = () => {
          i(n.error);
        };
        n.oncomplete = () => {
          a();
        };
        let l = c.index("updateTime");
        let m = IDBKeyRange.lowerBound(0);
        let s = Math.floor((yield o._getCount(l)) * r);
        let d = 0;
        let u;
        let p = false;
        let C = false;
        try {
          let v;
          var f = _._(h.H(l, m, "next"));
          for (; (p = !(v = yield f.next()).done); p = false) {
            let e = v.value;
            if (e && d < s) {
              e.delete();
              d++;
            } else {
              break;
            }
          }
        } catch (error) {
          C = true;
          u = error;
        } finally {
          try {
            if (p && f.return != null) {
              yield f.return();
            }
          } finally {
            if (C) {
              throw u;
            }
          }
        }
      })),
      function (e, t) {
        return a.apply(this, arguments);
      }),
    );
  }
  _cleanupDatabases(e) {
    const t = this;
    return m._(function* () {
      for (let r of t._schemas.keys()) {
        let a = yield t._databasePool.getDatabase(r);
        for (let r of a.objectStoreNames) {
          yield t._cleanupTable(a, r, e);
        }
      }
    })();
  }
  constructor(e, t) {
    this._schemas = e;
    this._databasePool = t;
    this._status = 0;
    this._times = 0;
    this._mark = false;
  }
}
const g = require("./module-A7.js");
const y = require("./module-Dm.js");
class w {
  get result() {
    return this._cacheResult;
  }
  set(e, t, r) {
    y.X3(this._checkTable(e));
    y.X3(!this._done);
    new s(this._transaction, e).set(t, r).catch((e) => {
      this._onError.fire(e);
    });
  }
  setMany(e, t) {
    y.X3(this._checkTable(e));
    y.X3(!this._done);
    new s(this._transaction, e).setMany(t).catch((e) => {
      this._onError.fire(e);
    });
  }
  delete(e, t) {
    y.X3(this._checkTable(e));
    y.X3(!this._done);
    new s(this._transaction, e).delete(t).catch((e) => {
      this._onError.fire(e);
    });
  }
  deleteMany(e, t) {
    y.X3(this._checkTable(e));
    y.X3(!this._done);
    new s(this._transaction, e).deleteMany(t).catch((e) => {
      this._onError.fire(e);
    });
  }
  query(e, t) {
    y.X3(this._checkTable(e));
    y.X3(!this._done);
    this.queryMany(e, [t]);
  }
  queryMany(e, t) {
    y.X3(this._checkTable(e));
    y.X3(!this._done);
    new s(this._transaction, e)
      .queryMany(t)
      .then((t) => {
        if (t) {
          for (let [r, a] of (this._cacheResult.has(e) ||
            this._cacheResult.set(e, new Map()),
          t)) {
            this._cacheResult.get(e).set(r, a);
          }
        }
      })
      .catch((e) => {
        this._onError.fire(e);
      });
  }
  clear(e) {
    y.X3(this._checkTable(e));
    y.X3(!this._done);
    new s(this._transaction, e).clear().catch((e) => {
      this._onError.fire(e);
    });
  }
  commit() {
    this._done = true;
  }
  _checkTable(e) {
    return this._tables.has(e);
  }
  constructor(e, t) {
    for (let r of ((this._transaction = e),
    (this._cacheResult = new Map()),
    (this._tables = new Set()),
    (this._onError = new g.v()),
    (this._onComplete = new g.v()),
    (this._done = false),
    (this.onError = this._onError.event),
    (this.onComplete = this._onComplete.event),
    t)) {
      this._tables.add(r);
    }
    this._transaction.onabort = () => {
      this._onError.fire(this._transaction.error);
    };
    this._transaction.onerror = () => {
      this._onError.fire(this._transaction.error);
    };
    this._transaction.oncomplete = () => {
      this._onComplete.fire(this._cacheResult);
    };
  }
}
class I {
  getDatabase(e) {
    if (this._pool.has(e)) {
      return Promise.resolve(this._pool.get(e));
    }
    if (this._connectingRequest.has(e)) {
      return this._connectingRequest.get(e);
    }
    let t = this._schemas.get(e);
    let r = new Promise((resolve, reject) => {
      let o = indexedDB.open(e, t.version);
      o.onupgradeneeded = () => {
        try {
          let t = o.result;
          this._initTable(t, e, o.transaction);
        } catch (error) {
          reject(error);
        }
      };
      o.onerror = (e) => {
        reject(e);
      };
      o.onblocked = (e) => {
        reject(e);
      };
      o.onsuccess = () => {
        try {
          let t = o.result;
          this._listenDbEvent(t);
          this._pool.set(e, t);
          resolve(t);
        } catch (error) {
          reject(error);
        }
      };
    }).finally(() => {
      this._connectingRequest.delete(e);
    });
    this._connectingRequest.set(e, r);
    return r;
  }
  _initTable(e, t, r) {
    let a = this._schemas.get(t);
    y.F4(a);
    let o = new Set();
    for (let t of e.objectStoreNames) {
      o.add(t);
    }
    for (let [t, i] of a.tables) {
      if (o.has(t)) {
        y.F4(r, "need transaction when db upgrade.");
        let e = r.objectStore(t);
        this._createIndex(e, i.index);
        continue;
      }
      let a = e.createObjectStore(t, {
        keyPath: i.key,
      });
      this._createIndex(a, i.index);
    }
  }
  _createIndex(e, t) {
    let r = new Set();
    for (let t of e.indexNames) {
      r.add(t);
    }
    for (let o of t) {
      let a;
      if (!r.has(o.name)) {
        e.createIndex(o.name, (a = o.keyPath) != null ? a : o.name, {
          unique: o.unique,
        });
      }
    }
  }
  _removeCache(e) {
    for (let [t, r] of this._pool) {
      if (r === e) {
        return void this._pool.delete(t);
      }
    }
  }
  _listenDbEvent(e) {
    e.onversionchange = () => {
      e.close();
      this._removeCache(e);
    };
    e.onabort = () => {
      e.close();
      this._removeCache(e);
    };
    e.onerror = () => {
      e.close();
      this._removeCache(e);
    };
    e.onclose = () => {
      this._removeCache(e);
    };
  }
  constructor(e) {
    this._schemas = e;
    this._pool = new Map();
    this._connectingRequest = new Map();
  }
}
class b {
  connect(e, t) {
    if (this._store.has(e)) {
      return this._connect(e, t);
    }
    return Promise.resolve(Hs("db not found."));
  }
  invokeTransaction(e, t, r, a, o) {
    let i;
    const n = this;
    return new Promise(
      ((i = m._(function* (i) {
        try {
          let c = (yield n._databasePool.getDatabase(e)).transaction(t, a, o);
          let l = new w(c, t);
          l.onError((e) => {
            i(dT(e));
          });
          l.onComplete((e) => {
            i(TZ(e));
          });
          r(l);
          l.commit();
        } catch (error) {
          i(dT(error));
        }
      })),
      function (e) {
        return i.apply(this, arguments);
      }),
    );
  }
  readyCleanup() {
    this._cleanupMgr.mark();
  }
  _connect(e, t) {
    let r;
    const a = this;
    return new Promise(
      ((r = m._(function* (r) {
        try {
          let o = yield a._databasePool.getDatabase(e);
          let i = new v(o, t, a._databasePool, a._cleanupMgr);
          r(TZ(i));
        } catch (error) {
          r(Hs(error));
        }
      })),
      function (e) {
        return r.apply(this, arguments);
      }),
    );
  }
  constructor(e, t) {
    for (let r of ((this._instantiation = t), (this._store = new Map()), e)) {
      y.X3(!this._store.has(r.id));
      let tables = new Map();
      for (let t of r.tables) {
        y.X3(!tables.has(t.name));
        tables.set(t.name, t);
      }
      this._store.set(r.id, {
        version: r.version,
        tables,
      });
    }
    this._databasePool = new I(this._store);
    this._cleanupMgr = this._instantiation.createInstance(
      S,
      this._store,
      this._databasePool,
    );
  }
}
c.Cg(
  [
    function (e, t, r) {
      let r_value = r.value;
      r.value = m._(function* (...t) {
        let r = yield r_value.apply(this, t);
        if (r.ok || !r.cause || r.cause.name !== "QuotaExceededError") {
          return r;
        }
        {
          e.readyCleanup.apply(this);
          yield u(500);
          let o = yield r_value.apply(this, t);
          if (o.ok) {
            return o;
          }
          return r;
        }
      });
      return r;
    },
    c.Sn("design:type", Function),
    c.Sn("design:paramtypes", [
      String,
      Array,
      Function,
      typeof IDBTransactionMode === "undefined" ? Object : IDBTransactionMode,
      typeof IDBTransactionOptions === "undefined"
        ? Object
        : IDBTransactionOptions,
    ]),
    c.Sn(
      "design:returntype",
      typeof Promise === "undefined" ? Object : Promise,
    ),
  ],
  b.prototype,
  "invokeTransaction",
  null,
);
b = c.Cg(
  [
    c.Qj(1, __1),
    c.Sn("design:type", Function),
    c.Sn("design:paramtypes", [Array, __1 === undefined ? Object : __1]),
  ],
  b,
);
class j {
  set(e, t) {
    if (!this._localstorage) {
      return Um();
    }
    try {
      this._localstorage.setItem(e, t);
    } catch (error) {
      return sZ(error);
    }
    return nj();
  }
  delete(e) {
    if (!this._localstorage) {
      return Um();
    }
    try {
      this._localstorage.removeItem(e);
    } catch (error) {
      return TG(error);
    }
    return nj();
  }
  query(e) {
    if (!this._localstorage) {
      return Um();
    }
    try {
      let t = this._localstorage.getItem(e);
      if (t) {
        return TZ(t);
      }
    } catch (error) {
      return oP(error);
    }
    return TZ(undefined);
  }
  queryAndParse(e, t) {
    if (!this._localstorage) {
      return Um();
    }
    try {
      let r = this._localstorage.getItem(e);
      if (r) {
        return TZ(t(r));
      }
    } catch (error) {
      return oP(error);
    }
    return TZ(undefined);
  }
  clear() {
    if (!this._localstorage) {
      return Um();
    }
    try {
      this._localstorage.clear();
    } catch (error) {
      return nu(error);
    }
    return nj();
  }
  constructor() {
    this._localstorage = window.localStorage;
  }
}
class k {
  constructor(e, t) {
    this.keyValue = new j();
    this.database = t.createInstance(b, e);
  }
}
export { k as n };
k = c.Cg(
  [
    c.Qj(1, __1),
    c.Sn("design:type", Function),
    c.Sn("design:paramtypes", [Array, __1 === undefined ? Object : __1]),
  ],
  k,
);
