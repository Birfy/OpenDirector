import o from "./module-eP_9.js";
import i from "./module-J_10.js";
import a from "./module-O9_9.js";
import s from "./module-dFV_9.js";
import u from "./module-Be_2_9.js";
import c from "./module-s0_9.js";
import f from "./module-v6D_9.js";
import l from "./module-y_2_9.js";
import _h from "./module-b_9.js";
import v from "./module-X_10.js";
import d from "./module-Zc_9.js";
let n;
const _h_enforce = _h.enforce;
const Object_isExtensible = Object.isExtensible;
const Object_isFrozen = Object.isFrozen;
const Object_isSealed = Object.isSealed;
const Object_freeze = Object.freeze;
const Object_seal = Object.seal;
const x = {};
const E = {};
const S = !i.ActiveXObject && "ActiveXObject" in i;
const O = function (t) {
  return function () {
    return t(this, arguments.length ? arguments[0] : undefined);
  };
};
const _ = c("WeakMap", O, f);
const __prototype = _.prototype;
const M = a(__prototype.set);
if (d) {
  if (S) {
    n = f.getConstructor(O, "WeakMap", true);
    u.enable();
    const I = a(__prototype.delete);
    const T = a(__prototype.has);
    const k = a(__prototype.get);
    s(__prototype, {
      delete: function (t) {
        if (l(t) && !Object_isExtensible(t)) {
          const e = _h_enforce(this);
          if (!e.frozen) {
            e.frozen = new n();
          }
          return I(this, t) || e.frozen.delete(t);
        }
        return I(this, t);
      },
      has: function (t) {
        if (l(t) && !Object_isExtensible(t)) {
          const e = _h_enforce(this);
          if (!e.frozen) {
            e.frozen = new n();
          }
          return T(this, t) || e.frozen.has(t);
        }
        return T(this, t);
      },
      get: function (t) {
        if (l(t) && !Object_isExtensible(t)) {
          const e = _h_enforce(this);
          if (!e.frozen) {
            e.frozen = new n();
          }
          if (T(this, t)) {
            return k(this, t);
          }
          return e.frozen.get(t);
        }
        return k(this, t);
      },
      set: function (t, e) {
        if (l(t) && !Object_isExtensible(t)) {
          const r = _h_enforce(this);
          if (!r.frozen) {
            r.frozen = new n();
          }
          if (T(this, t)) {
            M(this, t, e);
          } else {
            r.frozen.set(t, e);
          }
        } else {
          M(this, t, e);
        }
        return this;
      },
    });
  } else {
    if (
      o &&
      v(function () {
        const t = Object_freeze([]);
        M(new _(), t, 1);
        return !Object_isFrozen(t);
      })
    ) {
      s(__prototype, {
        set: function (t, e) {
          let r;
          if (Array.isArray(t)) {
            if (Object_isFrozen(t)) {
              r = x;
            } else if (Object_isSealed(t)) {
              r = E;
            }
          }
          M(this, t, e);
          if (r === x) {
            Object_freeze(t);
          }
          if (r === E) {
            Object_seal(t);
          }
          return this;
        },
      });
    }
  }
}
