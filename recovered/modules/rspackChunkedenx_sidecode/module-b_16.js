import a from "./module-Zc_16.js";
import s from "./module-J_17.js";
import u from "./module-y_2_16.js";
import c from "./module-h_17.js";
import f from "./module-D_2_16.js";
import l from "./module-W_2_16.js";
import h from "./module-uW_17.js";
import v from "./module-S_16.js";
let set;
let get;
let has;
const p = "Object already initialized";
const s_TypeError = s.TypeError;
const s_WeakMap = s.WeakMap;
if (a || l.state) {
  const y = l.state || (l.state = new s_WeakMap());
  y.get = y.get;
  y.has = y.has;
  y.set = y.set;
  set = function (t, r) {
    if (y.has(t)) {
      throw s_TypeError(p);
    }
    r.facade = t;
    y.set(t, r);
    return r;
  };
  get = function (t) {
    return y.get(t) || {};
  };
  has = function (t) {
    return y.has(t);
  };
} else {
  const m = h("state");
  v[m] = true;
  set = function (t, r) {
    if (f(t, m)) {
      throw s_TypeError(p);
    }
    r.facade = t;
    c(t, m, r);
    return r;
  };
  get = function (t) {
    if (f(t, m)) {
      return t[m];
    }
    return {};
  };
  has = function (t) {
    return f(t, m);
  };
}
export default {
  set,
  get,
  has,
  enforce: function (t) {
    if (has(t)) {
      return get(t);
    }
    return set(t, {});
  },
  getterFor: function (t) {
    return function (r) {
      let e;
      if (!u(r) || (e = get(r)).type !== t) {
        throw s_TypeError("Incompatible receiver, " + t + " required");
      }
      return e;
    };
  },
};
