import i from "./module-eP_5.js";
import o from "./module-J_6.js";
import s from "./module-O9_5.js";
import a from "./module-dFV_5.js";
import u from "./module-Be_2_5.js";
import c from "./module-s0_5.js";
import f from "./module-v6D_5.js";
import h from "./module-y_2_5.js";
import _l from "./module-b_5.js";
import v from "./module-X_6.js";
import p from "./module-Zc_5.js";
let n;
const _l_enforce = _l.enforce;
const Object_isExtensible = Object.isExtensible;
const Object_isFrozen = Object.isFrozen;
const Object_isSealed = Object.isSealed;
const Object_freeze = Object.freeze;
const Object_seal = Object.seal;
const w = {};
const S = {};
const E = !o.ActiveXObject && "ActiveXObject" in o;
const O = function (t) {
  return function () {
    return t(this, arguments.length ? arguments[0] : undefined);
  };
};
const R = c("WeakMap", O, f);
const R_prototype = R.prototype;
const I = s(R_prototype.set);
if (p) {
  if (E) {
    n = f.getConstructor(O, "WeakMap", true);
    u.enable();
    const k = s(R_prototype.delete);
    const T = s(R_prototype.has);
    const j = s(R_prototype.get);
    a(R_prototype, {
      delete: function (t) {
        if (h(t) && !Object_isExtensible(t)) {
          const r = _l_enforce(this);
          if (!r.frozen) {
            r.frozen = new n();
          }
          return k(this, t) || r.frozen.delete(t);
        }
        return k(this, t);
      },
      has: function (t) {
        if (h(t) && !Object_isExtensible(t)) {
          const r = _l_enforce(this);
          if (!r.frozen) {
            r.frozen = new n();
          }
          return T(this, t) || r.frozen.has(t);
        }
        return T(this, t);
      },
      get: function (t) {
        if (h(t) && !Object_isExtensible(t)) {
          const r = _l_enforce(this);
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
        if (h(t) && !Object_isExtensible(t)) {
          const e = _l_enforce(this);
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
      i &&
      v(function () {
        const t = Object_freeze([]);
        I(new R(), t, 1);
        return !Object_isFrozen(t);
      })
    ) {
      a(R_prototype, {
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
