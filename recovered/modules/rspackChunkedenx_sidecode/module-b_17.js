import a from "./module-Zc_17.js";
import s from "./module-J_18.js";
import u from "./module-y_2_17.js";
import c from "./module-h_18.js";
import f from "./module-D_2_17.js";
import h from "./module-W_2_17.js";
import l from "./module-uW_18.js";
import v from "./module-S_17.js";
let set;
let get;
let has;
const p = "Object already initialized";
const s_TypeError = s.TypeError;
const s_WeakMap = s.WeakMap;
if (a || h.state) {
  const y = h.state || (h.state = new s_WeakMap());
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
  const b = l("state");
  v[b] = true;
  set = function (r, t) {
    if (f(r, b)) {
      throw s_TypeError(p);
    }
    t.facade = r;
    c(r, b, t);
    return t;
  };
  get = function (r) {
    if (f(r, b)) {
      return r[b];
    }
    return {};
  };
  has = function (r) {
    return f(r, b);
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
