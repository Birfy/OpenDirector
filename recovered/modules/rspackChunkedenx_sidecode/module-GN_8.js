import "./module-ID_9.js";
import "./module-KR_8.js";
import n from "./module-YR_8.js";
import i from "./module-O9_8.js";
import o from "./module-K_9.js";
const s = n("Map");
const a = n("WeakMap");
const u = i([].push);
const c = o("metadata");
const store = c.store || (c.store = new a());
const getMap = function (t, r, e) {
  let n = store.get(t);
  if (!n) {
    if (!e) {
      return;
    }
    store.set(t, (n = new s()));
  }
  let i = n.get(r);
  if (!i) {
    if (!e) {
      return;
    }
    n.set(r, (i = new s()));
  }
  return i;
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
