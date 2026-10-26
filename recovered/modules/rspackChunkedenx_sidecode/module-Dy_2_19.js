import o from "./module-eP_19.js";
import i from "./module-J_20.js";
import a from "./module-O9_19.js";
import s from "./module-dFV_19.js";
import u from "./module-Be_2_19.js";
import c from "./module-s0_19.js";
import f from "./module-v6D_19.js";
import l from "./module-y_2_19.js";
import _h from "./module-b_19.js";
import v from "./module-X_20.js";
import p from "./module-Zc_19.js";
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
const O = function (r) {
  return function () {
    return r(this, arguments.length ? arguments[0] : undefined);
  };
};
const R = c("WeakMap", O, f);
const R_prototype = R.prototype;
const I = a(R_prototype.set);
if (p) {
  if (E) {
    n = f.getConstructor(O, "WeakMap", true);
    u.enable();
    const k = a(R_prototype.delete);
    const T = a(R_prototype.has);
    const j = a(R_prototype.get);
    s(R_prototype, {
      delete: function (r) {
        if (l(r) && !Object_isExtensible(r)) {
          const t = _h_enforce(this);
          if (!t.frozen) {
            t.frozen = new n();
          }
          return k(this, r) || t.frozen.delete(r);
        }
        return k(this, r);
      },
      has: function (r) {
        if (l(r) && !Object_isExtensible(r)) {
          const t = _h_enforce(this);
          if (!t.frozen) {
            t.frozen = new n();
          }
          return T(this, r) || t.frozen.has(r);
        }
        return T(this, r);
      },
      get: function (r) {
        if (l(r) && !Object_isExtensible(r)) {
          const t = _h_enforce(this);
          if (!t.frozen) {
            t.frozen = new n();
          }
          if (T(this, r)) {
            return j(this, r);
          }
          return t.frozen.get(r);
        }
        return j(this, r);
      },
      set: function (r, t) {
        if (l(r) && !Object_isExtensible(r)) {
          const e = _h_enforce(this);
          if (!e.frozen) {
            e.frozen = new n();
          }
          if (T(this, r)) {
            I(this, r, t);
          } else {
            e.frozen.set(r, t);
          }
        } else {
          I(this, r, t);
        }
        return this;
      },
    });
  } else {
    if (
      o &&
      v(function () {
        const r = Object_freeze([]);
        I(new R(), r, 1);
        return !Object_isFrozen(r);
      })
    ) {
      s(R_prototype, {
        set: function (r, t) {
          let e;
          if (Array.isArray(r)) {
            if (Object_isFrozen(r)) {
              e = w;
            } else if (Object_isSealed(r)) {
              e = S;
            }
          }
          I(this, r, t);
          if (e === w) {
            Object_freeze(r);
          }
          if (e === S) {
            Object_seal(r);
          }
          return this;
        },
      });
    }
  }
}
