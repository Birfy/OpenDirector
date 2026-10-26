import tt from "./module-eP_12.js";
import te from "./module-J_13.js";
import tr from "./module-O9_12.js";
import tn from "./module-dFV_12.js";
import ti from "./module-Be_2_12.js";
import to from "./module-s0_12.js";
import ta from "./module-v6D_12.js";
import ts from "./module-y_2_12.js";
import _tf from "./module-b_12.js";
import tu from "./module-X_13.js";
import tc from "./module-Zc_12.js";
let $;
const _tf_enforce = _tf.enforce;
const Object_isExtensible = Object.isExtensible;
const Object_isFrozen = Object.isFrozen;
const Object_isSealed = Object.isSealed;
const Object_freeze = Object.freeze;
const Object_seal = Object.seal;
const ty = {};
const tm = {};
const tw = !te.ActiveXObject && "ActiveXObject" in te;
const tx = function (J) {
  return function () {
    return J(this, arguments.length ? arguments[0] : undefined);
  };
};
const t_ = to("WeakMap", tx, ta);
const t__prototype = t_.prototype;
const tS = tr(t__prototype.set);
if (tc) {
  if (tw) {
    $ = ta.getConstructor(tx, "WeakMap", true);
    ti.enable();
    const tA = tr(t__prototype.delete);
    const tE = tr(t__prototype.has);
    const tk = tr(t__prototype.get);
    tn(t__prototype, {
      delete: function (J) {
        if (ts(J) && !Object_isExtensible(J)) {
          const Z = _tf_enforce(this);
          if (!Z.frozen) {
            Z.frozen = new $();
          }
          return tA(this, J) || Z.frozen.delete(J);
        }
        return tA(this, J);
      },
      has: function (J) {
        if (ts(J) && !Object_isExtensible(J)) {
          const Z = _tf_enforce(this);
          if (!Z.frozen) {
            Z.frozen = new $();
          }
          return tE(this, J) || Z.frozen.has(J);
        }
        return tE(this, J);
      },
      get: function (J) {
        if (ts(J) && !Object_isExtensible(J)) {
          const Z = _tf_enforce(this);
          if (!Z.frozen) {
            Z.frozen = new $();
          }
          if (tE(this, J)) {
            return tk(this, J);
          }
          return Z.frozen.get(J);
        }
        return tk(this, J);
      },
      set: function (J, Z) {
        if (ts(J) && !Object_isExtensible(J)) {
          const Q = _tf_enforce(this);
          if (!Q.frozen) {
            Q.frozen = new $();
          }
          if (tE(this, J)) {
            tS(this, J, Z);
          } else {
            Q.frozen.set(J, Z);
          }
        } else {
          tS(this, J, Z);
        }
        return this;
      },
    });
  } else {
    if (
      tt &&
      tu(function () {
        const J = Object_freeze([]);
        tS(new t_(), J, 1);
        return !Object_isFrozen(J);
      })
    ) {
      tn(t__prototype, {
        set: function (J, Z) {
          let Q;
          if (Array.isArray(J)) {
            if (Object_isFrozen(J)) {
              Q = ty;
            } else if (Object_isSealed(J)) {
              Q = tm;
            }
          }
          tS(this, J, Z);
          if (Q === ty) {
            Object_freeze(J);
          }
          if (Q === tm) {
            Object_seal(J);
          }
          return this;
        },
      });
    }
  }
}
