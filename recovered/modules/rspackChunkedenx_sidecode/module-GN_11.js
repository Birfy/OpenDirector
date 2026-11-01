import "./module-ID_12.js";
import "./module-KR_11.js";
import n from "./module-YR_11.js";
import o from "./module-O9_11.js";
import i from "./module-K_12.js";
const a = n("Map");
const s = n("WeakMap");
const u = o([].push);
const c = i("metadata");
const store = c.store || (c.store = new s());
const getMap = function (r, t, e) {
  let n = store.get(r);
  if (!n) {
    if (!e) {
      return;
    }
    store.set(r, (n = new a()));
  }
  let o = n.get(t);
  if (!o) {
    if (!e) {
      return;
    }
    n.set(t, (o = new a()));
  }
  return o;
};
export default {
  store,
  getMap,
  has: function (r, t, e) {
    const n = getMap(t, e, false);
    return n !== undefined && n.has(r);
  },
  get: function (r, t, e) {
    const n = getMap(t, e, false);
    if (n === undefined) {
      return undefined;
    }
    return n.get(r);
  },
  set: function (r, t, e, n) {
    getMap(e, n, true).set(r, t);
  },
  keys: function (r, t) {
    const e = getMap(r, t, false);
    const n = [];
    if (e) {
      e.forEach((r, t) => {
        u(n, t);
      });
    }
    return n;
  },
  toKey: function (r) {
    if (r === undefined || typeof r === "symbol") {
      return r;
    }
    return String(r);
  },
};
