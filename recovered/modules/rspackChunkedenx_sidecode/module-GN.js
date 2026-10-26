import "./module-ID.js";
import "./module-KR.js";
import n from "./module-YR.js";
import o from "./module-O9.js";
import i from "./module-K.js";
const a = n("Map");
const s = n("WeakMap");
const u = o([].push);
const c = i("metadata");
const store = c.store || (c.store = new s());
const getMap = function (t, r, e) {
  let n = store.get(t);
  if (!n) {
    if (!e) {
      return;
    }
    store.set(t, (n = new a()));
  }
  let o = n.get(r);
  if (!o) {
    if (!e) {
      return;
    }
    n.set(r, (o = new a()));
  }
  return o;
};
export default {
  store,
  getMap,
  has: function (t, r, e) {
    const n = getMap(r, e, false);
    return n !== undefined && n.has(t);
  },
  get: function (t, r, e) {
    const n = getMap(r, e, false);
    if (n === undefined) {
      return undefined;
    }
    return n.get(t);
  },
  set: function (t, r, e, n) {
    getMap(e, n, true).set(t, r);
  },
  keys: function (t, r) {
    const e = getMap(t, r, false);
    const n = [];
    if (e) {
      e.forEach((t, r) => {
        u(n, r);
      });
    }
    return n;
  },
  toKey: function (t) {
    if (t === undefined || typeof t === "symbol") {
      return t;
    }
    return String(t);
  },
};
