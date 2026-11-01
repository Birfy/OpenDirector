import tr from "./module-Zc_12.js";
import tn from "./module-J_13.js";
import ti from "./module-y_2_12.js";
import to from "./module-h_13.js";
import ta from "./module-D_2_12.js";
import ts from "./module-W_2_12.js";
import tf from "./module-uW_13.js";
import tu from "./module-S_12.js";
let set;
let get;
let has;
const tc = "Object already initialized";
const tn_TypeError = tn.TypeError;
const tn_WeakMap = tn.WeakMap;
if (tr || ts.state) {
  const tl = ts.state || (ts.state = new tn_WeakMap());
  tl.get = tl.get;
  tl.has = tl.has;
  tl.set = tl.set;
  set = function (J, Z) {
    if (tl.has(J)) {
      throw tn_TypeError(tc);
    }
    Z.facade = J;
    tl.set(J, Z);
    return Z;
  };
  get = function (J) {
    return tl.get(J) || {};
  };
  has = function (J) {
    return tl.has(J);
  };
} else {
  const tp = tf("state");
  tu[tp] = true;
  set = function (J, Z) {
    if (ta(J, tp)) {
      throw tn_TypeError(tc);
    }
    Z.facade = J;
    to(J, tp, Z);
    return Z;
  };
  get = function (J) {
    if (ta(J, tp)) {
      return J[tp];
    }
    return {};
  };
  has = function (J) {
    return ta(J, tp);
  };
}
export default {
  set,
  get,
  has,
  enforce: function (J) {
    if (has(J)) {
      return get(J);
    }
    return set(J, {});
  },
  getterFor: function (J) {
    return function (Z) {
      let Q;
      if (!ti(Z) || (Q = get(Z)).type !== J) {
        throw tn_TypeError("Incompatible receiver, " + J + " required");
      }
      return Q;
    };
  },
};
