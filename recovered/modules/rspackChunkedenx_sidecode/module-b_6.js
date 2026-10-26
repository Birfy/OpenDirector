import i from "./module-Zc_6.js";
import s from "./module-J_7.js";
import c from "./module-y_2_6.js";
import u from "./module-h_7.js";
import f from "./module-D_2_6.js";
import l from "./module-W_2_6.js";
import h from "./module-uW_7.js";
import p from "./module-S_6.js";
let set;
let get;
let has;
const v = "Object already initialized";
const s_TypeError = s.TypeError;
const s_WeakMap = s.WeakMap;
if (i || l.state) {
  const y = l.state || (l.state = new s_WeakMap());
  y.get = y.get;
  y.has = y.has;
  y.set = y.set;
  set = function (t, r) {
    if (y.has(t)) {
      throw s_TypeError(v);
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
  p[m] = true;
  set = function (t, r) {
    if (f(t, m)) {
      throw s_TypeError(v);
    }
    r.facade = t;
    u(t, m, r);
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
      if (!c(r) || (e = get(r)).type !== t) {
        throw s_TypeError("Incompatible receiver, " + t + " required");
      }
      return e;
    };
  },
};
