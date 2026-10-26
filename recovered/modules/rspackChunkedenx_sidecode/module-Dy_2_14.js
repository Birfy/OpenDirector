import o from "./module-eP_14.js";
import i from "./module-J_15.js";
import a from "./module-O9_14.js";
import s from "./module-dFV_14.js";
import c from "./module-Be_2_14.js";
import u from "./module-s0_14.js";
import f from "./module-v6D_14.js";
import l from "./module-y_2_14.js";
import _h from "./module-b_14.js";
import v from "./module-X_15.js";
import p from "./module-Zc_14.js";
let n;
const _h_enforce = _h.enforce;
const Object_isExtensible = Object.isExtensible;
const Object_isFrozen = Object.isFrozen;
const Object_isSealed = Object.isSealed;
const Object_freeze = Object.freeze;
const Object_seal = Object.seal;
const w = {};
const S = {};
const E = !i.ActiveXObject && "ActiveXObject" in i;
const O = function (t) {
  return function () {
    return t(this, arguments.length ? arguments[0] : undefined);
  };
};
const R = u("WeakMap", O, f);
const R_prototype = R.prototype;
const I = a(R_prototype.set);
if (p) {
  if (E) {
    n = f.getConstructor(O, "WeakMap", true);
    c.enable();
    const k = a(R_prototype.delete);
    const j = a(R_prototype.has);
    const T = a(R_prototype.get);
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
          return j(this, t) || r.frozen.has(t);
        }
        return j(this, t);
      },
      get: function (t) {
        if (l(t) && !Object_isExtensible(t)) {
          const r = _h_enforce(this);
          if (!r.frozen) {
            r.frozen = new n();
          }
          if (j(this, t)) {
            return T(this, t);
          }
          return r.frozen.get(t);
        }
        return T(this, t);
      },
      set: function (t, r) {
        if (l(t) && !Object_isExtensible(t)) {
          const e = _h_enforce(this);
          if (!e.frozen) {
            e.frozen = new n();
          }
          if (j(this, t)) {
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
      v(function () {
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
              e = w;
            } else if (Object_isSealed(t)) {
              e = S;
            }
          }
          I(this, t, r);
          if (e === w) {
            Object_freeze(t);
          }
          if (e === S) {
            Object_seal(t);
          }
          return this;
        },
      });
    }
  }
}
