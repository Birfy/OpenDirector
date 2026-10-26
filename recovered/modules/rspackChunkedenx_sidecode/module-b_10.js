import a from "./module-Zc_10.js";
import s from "./module-J_11.js";
import u from "./module-y_2_10.js";
import c from "./module-h_11.js";
import f from "./module-D_2_10.js";
import l from "./module-W_2_10.js";
import h from "./module-uW_11.js";
import v from "./module-S_10.js";
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
  const b = h("state");
  v[b] = true;
  set = function (t, r) {
    if (f(t, b)) {
      throw s_TypeError(p);
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
        throw s_TypeError("Incompatible receiver, " + t + " required");
      }
      return e;
    };
  },
};
