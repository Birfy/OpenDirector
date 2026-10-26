import a from "./module-Zc.js";
import s from "./module-J.js";
import u from "./module-y_2.js";
import c from "./module-h.js";
import f from "./module-D_2.js";
import h from "./module-W_2.js";
import l from "./module-uW.js";
import v from "./module-S.js";
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
  const b = l("state");
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
