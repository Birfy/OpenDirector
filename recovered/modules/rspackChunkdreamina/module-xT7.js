import o from "./module-BQ.js";
import i from "./module-u.js";
import a from "./module-o.js";
import s from "./module-IG_3.js";
import u from "./module-C3_2.js";
import c from "./module-sg_3.js";
import f from "./module-N3.js";
import l from "./module-N.js";
import _p from "./module-G_2.js";
import h from "./module-VV_4.js";
import v from "./module-m_2.js";
let n;
const _p_enforce = _p.enforce;
const Object_isExtensible = Object.isExtensible;
const Object_isFrozen = Object.isFrozen;
const Object_isSealed = Object.isSealed;
const Object_freeze = Object.freeze;
const Object_seal = Object.seal;
const A = {};
const E = {};
const j = !i.ActiveXObject && "ActiveXObject" in i;
const I = function (e) {
  return function () {
    return e(this, arguments.length ? arguments[0] : undefined);
  };
};
const R = c("WeakMap", I, f);
const R_prototype = R.prototype;
const O = a(R_prototype.set);
if (v) {
  if (j) {
    n = f.getConstructor(I, "WeakMap", true);
    u.enable();
    const S = a(R_prototype.delete);
    const _ = a(R_prototype.has);
    const T = a(R_prototype.get);
    s(R_prototype, {
      delete: function (e) {
        if (l(e) && !Object_isExtensible(e)) {
          const t = _p_enforce(this);
          if (!t.frozen) {
            t.frozen = new n();
          }
          return S(this, e) || t.frozen.delete(e);
        }
        return S(this, e);
      },
      has: function (e) {
        if (l(e) && !Object_isExtensible(e)) {
          const t = _p_enforce(this);
          if (!t.frozen) {
            t.frozen = new n();
          }
          return _(this, e) || t.frozen.has(e);
        }
        return _(this, e);
      },
      get: function (e) {
        if (l(e) && !Object_isExtensible(e)) {
          const t = _p_enforce(this);
          if (!t.frozen) {
            t.frozen = new n();
          }
          if (_(this, e)) {
            return T(this, e);
          }
          return t.frozen.get(e);
        }
        return T(this, e);
      },
      set: function (e, t) {
        if (l(e) && !Object_isExtensible(e)) {
          const r = _p_enforce(this);
          if (!r.frozen) {
            r.frozen = new n();
          }
          if (_(this, e)) {
            O(this, e, t);
          } else {
            r.frozen.set(e, t);
          }
        } else {
          O(this, e, t);
        }
        return this;
      },
    });
  } else {
    if (
      o &&
      h(function () {
        const e = Object_freeze([]);
        O(new R(), e, 1);
        return !Object_isFrozen(e);
      })
    ) {
      s(R_prototype, {
        set: function (e, t) {
          let r;
          if (Array.isArray(e)) {
            if (Object_isFrozen(e)) {
              r = A;
            } else if (Object_isSealed(e)) {
              r = E;
            }
          }
          O(this, e, t);
          if (r === A) {
            Object_freeze(e);
          }
          if (r === E) {
            Object_seal(e);
          }
          return this;
        },
      });
    }
  }
}
