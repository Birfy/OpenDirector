import a from "./module-Zc_7.js";
import s from "./module-J_8.js";
import u from "./module-y_2_7.js";
import c from "./module-h_8.js";
import f from "./module-D_2_7.js";
import l from "./module-W_2_7.js";
import h from "./module-uW_8.js";
import v from "./module-S_7.js";
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
  set = function (r, t) {
    if (y.has(r)) {
      throw s_TypeError(p);
    }
    t.facade = r;
    y.set(r, t);
    return t;
  };
  get = function (r) {
    return y.get(r) || {};
  };
  has = function (r) {
    return y.has(r);
  };
} else {
  const m = h("state");
  v[m] = true;
  set = function (r, t) {
    if (f(r, m)) {
      throw s_TypeError(p);
    }
    t.facade = r;
    c(r, m, t);
    return t;
  };
  get = function (r) {
    if (f(r, m)) {
      return r[m];
    }
    return {};
  };
  has = function (r) {
    return f(r, m);
  };
}
export default {
  set,
  get,
  has,
  enforce: function (r) {
    if (has(r)) {
      return get(r);
    }
    return set(r, {});
  },
  getterFor: function (r) {
    return function (t) {
      let e;
      if (!u(t) || (e = get(t)).type !== r) {
        throw s_TypeError("Incompatible receiver, " + r + " required");
      }
      return e;
    };
  },
};
