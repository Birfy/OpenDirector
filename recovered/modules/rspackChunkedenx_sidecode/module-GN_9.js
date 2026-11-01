import "./module-ID_10.js";
import "./module-KR_9.js";
import n from "./module-YR_9.js";
import o from "./module-O9_9.js";
import i from "./module-K_10.js";
const a = n("Map");
const s = n("WeakMap");
const u = o([].push);
const c = i("metadata");
const store = c.store || (c.store = new s());
const getMap = function (t, e, r) {
  let n = store.get(t);
  if (!n) {
    if (!r) {
      return;
    }
    store.set(t, (n = new a()));
  }
  let o = n.get(e);
  if (!o) {
    if (!r) {
      return;
    }
    n.set(e, (o = new a()));
  }
  return o;
};
export default {
  store,
  getMap,
  has: function (t, e, r) {
    const n = getMap(e, r, false);
    return n !== undefined && n.has(t);
  },
  get: function (t, e, r) {
    const n = getMap(e, r, false);
    if (n === undefined) {
      return undefined;
    }
    return n.get(t);
  },
  set: function (t, e, r, n) {
    getMap(r, n, true).set(t, e);
  },
  keys: function (t, e) {
    const r = getMap(t, e, false);
    const n = [];
    if (r) {
      r.forEach((t, e) => {
        u(n, e);
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
