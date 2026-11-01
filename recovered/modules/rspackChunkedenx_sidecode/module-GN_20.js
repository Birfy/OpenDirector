import "./module-ID_21.js";
import "./module-KR_20.js";
import n from "./module-YR_20.js";
import o from "./module-O9_20.js";
import i from "./module-K_21.js";
const a = n("Map");
const s = n("WeakMap");
const c = o([].push);
const u = i("metadata");
const store = u.store || (u.store = new s());
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
        c(n, r);
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
