import a from "./module-Zc_9.js";
import s from "./module-J_10.js";
import u from "./module-y_2_9.js";
import c from "./module-h_10.js";
import f from "./module-D_2_9.js";
import l from "./module-W_2_9.js";
import h from "./module-uW_10.js";
import v from "./module-S_9.js";
let set;
let get;
let has;
const d = "Object already initialized";
const s_TypeError = s.TypeError;
const s_WeakMap = s.WeakMap;
if (a || l.state) {
  const y = l.state || (l.state = new s_WeakMap());
  y.get = y.get;
  y.has = y.has;
  y.set = y.set;
  set = function (t, e) {
    if (y.has(t)) {
      throw s_TypeError(d);
    }
    e.facade = t;
    y.set(t, e);
    return e;
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
  set = function (t, e) {
    if (f(t, m)) {
      throw s_TypeError(d);
    }
    e.facade = t;
    c(t, m, e);
    return e;
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
    return function (e) {
      let r;
      if (!u(e) || (r = get(e)).type !== t) {
        throw s_TypeError("Incompatible receiver, " + t + " required");
      }
      return r;
    };
  },
};
