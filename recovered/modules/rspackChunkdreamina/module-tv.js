import "./module-Pf_2_2.js";
import "./module-RRx.js";
import n from "./module-Y.js";
import o from "./module-o.js";
import i from "./module-Mz_2.js";
const a = n("Map");
const s = n("WeakMap");
const u = o([].push);
const c = i("metadata");
const store = c.store || (c.store = new s());
const getMap = function (e, t, r) {
  let n = store.get(e);
  if (!n) {
    if (!r) {
      return;
    }
    store.set(e, (n = new a()));
  }
  let o = n.get(t);
  if (!o) {
    if (!r) {
      return;
    }
    n.set(t, (o = new a()));
  }
  return o;
};
export default {
  store,
  getMap,
  has: function (e, t, r) {
    const n = getMap(t, r, false);
    return n !== undefined && n.has(e);
  },
  get: function (e, t, r) {
    const n = getMap(t, r, false);
    if (n === undefined) {
      return undefined;
    }
    return n.get(e);
  },
  set: function (e, t, r, n) {
    getMap(r, n, true).set(e, t);
  },
  keys: function (e, t) {
    const r = getMap(e, t, false);
    const n = [];
    if (r) {
      r.forEach((e, t) => {
        u(n, t);
      });
    }
    return n;
  },
  toKey: function (e) {
    if (e === undefined || typeof e === "symbol") {
      return e;
    }
    return String(e);
  },
};
