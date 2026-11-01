import "./module-ID_13.js";
import "./module-KR_12.js";
import $ from "./module-YR_12.js";
import tt from "./module-O9_12.js";
import te from "./module-K_13.js";
const tr = $("Map");
const tn = $("WeakMap");
const ti = tt([].push);
const to = te("metadata");
const store = to.store || (to.store = new tn());
const getMap = function (J, Z, Q) {
  let $ = store.get(J);
  if (!$) {
    if (!Q) {
      return;
    }
    store.set(J, ($ = new tr()));
  }
  let tt = $.get(Z);
  if (!tt) {
    if (!Q) {
      return;
    }
    $.set(Z, (tt = new tr()));
  }
  return tt;
};
export default {
  store,
  getMap,
  has: function (J, Z, Q) {
    const $ = getMap(Z, Q, false);
    return $ !== undefined && $.has(J);
  },
  get: function (J, Z, Q) {
    const $ = getMap(Z, Q, false);
    if ($ === undefined) {
      return undefined;
    }
    return $.get(J);
  },
  set: function (J, Z, Q, $) {
    getMap(Q, $, true).set(J, Z);
  },
  keys: function (J, Z) {
    const Q = getMap(J, Z, false);
    const $ = [];
    if (Q) {
      Q.forEach((J, Z) => {
        ti($, Z);
      });
    }
    return $;
  },
  toKey: function (J) {
    if (J === undefined || typeof J === "symbol") {
      return J;
    }
    return String(J);
  },
};
