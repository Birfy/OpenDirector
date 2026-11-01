import o from "./module-eP_6.js";
import a from "./module-J_7.js";
import i from "./module-O9_6.js";
import s from "./module-dFV_6.js";
import c from "./module-Be_2_6.js";
import u from "./module-s0_6.js";
import f from "./module-v6D_6.js";
import l from "./module-y_2_6.js";
import _h from "./module-b_6.js";
import p from "./module-X_7.js";
import v from "./module-Zc_6.js";
let n;
const _h_enforce = _h.enforce;
const Object_isExtensible = Object.isExtensible;
const Object_isFrozen = Object.isFrozen;
const Object_isSealed = Object.isSealed;
const Object_freeze = Object.freeze;
const Object_seal = Object.seal;
const x = {};
const E = {};
const S = !a.ActiveXObject && "ActiveXObject" in a;
const O = function (t) {
  return function () {
    return t(this, arguments.length ? arguments[0] : undefined);
  };
};
const R = u("WeakMap", O, f);
const R_prototype = R.prototype;
const I = i(R_prototype.set);
if (v) {
  if (S) {
    n = f.getConstructor(O, "WeakMap", true);
    c.enable();
    const k = i(R_prototype.delete);
    const T = i(R_prototype.has);
    const j = i(R_prototype.get);
    s(R_prototype, {
      delete: function (t) {
        if (l(t) && !Object_isExtensible(t)) {
          const r = _h_enforce(this);
          if (!r.frozen) {
            r.frozen = new n();
          }
          return k(this, t) || r.frozen.delete(t);
        }
        return k(this, t);
      },
      has: function (t) {
        if (l(t) && !Object_isExtensible(t)) {
          const r = _h_enforce(this);
          if (!r.frozen) {
            r.frozen = new n();
          }
          return T(this, t) || r.frozen.has(t);
        }
        return T(this, t);
      },
      get: function (t) {
        if (l(t) && !Object_isExtensible(t)) {
          const r = _h_enforce(this);
          if (!r.frozen) {
            r.frozen = new n();
          }
          if (T(this, t)) {
            return j(this, t);
          }
          return r.frozen.get(t);
        }
        return j(this, t);
      },
      set: function (t, r) {
        if (l(t) && !Object_isExtensible(t)) {
          const e = _h_enforce(this);
          if (!e.frozen) {
            e.frozen = new n();
          }
          if (T(this, t)) {
            I(this, t, r);
          } else {
            e.frozen.set(t, r);
          }
        } else {
          I(this, t, r);
        }
        return this;
      },
    });
  } else {
    if (
      o &&
      p(function () {
        const t = Object_freeze([]);
        I(new R(), t, 1);
        return !Object_isFrozen(t);
      })
    ) {
      s(R_prototype, {
        set: function (t, r) {
          let e;
          if (Array.isArray(t)) {
            if (Object_isFrozen(t)) {
              e = x;
            } else if (Object_isSealed(t)) {
              e = E;
            }
          }
          I(this, t, r);
          if (e === x) {
            Object_freeze(t);
          }
          if (e === E) {
            Object_seal(t);
          }
          return this;
        },
      });
    }
  }
}
