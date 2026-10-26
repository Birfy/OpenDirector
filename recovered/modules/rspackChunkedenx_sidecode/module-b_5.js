import s from "./module-Zc_5.js";
import a from "./module-J_6.js";
import u from "./module-y_2_5.js";
import c from "./module-h_6.js";
import f from "./module-D_2_5.js";
import h from "./module-W_2_5.js";
import l from "./module-uW_6.js";
import v from "./module-S_5.js";
let set;
let get;
let has;
const p = "Object already initialized";
const a_TypeError = a.TypeError;
const a_WeakMap = a.WeakMap;
if (s || h.state) {
  const y = h.state || (h.state = new a_WeakMap());
  y.get = y.get;
  y.has = y.has;
  y.set = y.set;
  set = function (t, r) {
    if (y.has(t)) {
      throw a_TypeError(p);
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
  const b = l("state");
  v[b] = true;
  set = function (t, r) {
    if (f(t, b)) {
      throw a_TypeError(p);
    }
    r.facade = t;
    c(t, b, r);
    return r;
  };
  get = function (t) {
    if (f(t, b)) {
      return t[b];
    }
    return {};
  };
  has = function (t) {
    return f(t, b);
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
        throw a_TypeError("Incompatible receiver, " + t + " required");
      }
      return e;
    };
  },
};
