import a from "./module-m_2.js";
import s from "./module-u.js";
import u from "./module-N.js";
import c from "./module-z3.js";
import f from "./module-h.js";
import l from "./module-dE_2.js";
import p from "./module-s.js";
import h from "./module-rw.js";
let set;
let get;
let has;
const v = "Object already initialized";
const s_TypeError = s.TypeError;
const s_WeakMap = s.WeakMap;
if (a || l.state) {
  const y = l.state || (l.state = new s_WeakMap());
  y.get = y.get;
  y.has = y.has;
  y.set = y.set;
  set = function (e, t) {
    if (y.has(e)) {
      throw s_TypeError(v);
    }
    t.facade = e;
    y.set(e, t);
    return t;
  };
  get = function (e) {
    return y.get(e) || {};
  };
  has = function (e) {
    return y.has(e);
  };
} else {
  const m = p("state");
  h[m] = true;
  set = function (e, t) {
    if (f(e, m)) {
      throw s_TypeError(v);
    }
    t.facade = e;
    c(e, m, t);
    return t;
  };
  get = function (e) {
    if (f(e, m)) {
      return e[m];
    }
    return {};
  };
  has = function (e) {
    return f(e, m);
  };
}
export default {
  set,
  get,
  has,
  enforce: function (e) {
    if (has(e)) {
      return get(e);
    }
    return set(e, {});
  },
  getterFor: function (e) {
    return function (t) {
      let r;
      if (!u(t) || (r = get(t)).type !== e) {
        throw s_TypeError("Incompatible receiver, " + e + " required");
      }
      return r;
    };
  },
};
