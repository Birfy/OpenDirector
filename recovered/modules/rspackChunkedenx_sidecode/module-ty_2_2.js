import $ from "./module-ai.js";
import tt from "./module-fn_2.js";
import * as te from "./module-zT_2_2.js";
export { tt as assert };
export var toArray = te.toArray;
export const zero2 = te.zero2;
export const toHex = te.toHex;
export const encode = te.encode;
export const getNAF = function (J, Z, Q) {
  const $ = Array(Math.max(J.bitLength(), Q) + 1);
  for (tr = 0; tr < $.length; tr += 1) {
    $[tr] = 0;
  }
  const tt = 1 << (Z + 1);
  const te = J.clone();
  for (tr = 0; tr < $.length; tr++) {
    var tr;
    let tn;
    const ti = te.andln(tt - 1);
    if (te.isOdd()) {
      tn = ti > (tt >> 1) - 1 ? (tt >> 1) - ti : ti;
      te.isubn(tn);
    } else {
      tn = 0;
    }
    $[tr] = tn;
    te.iushrn(1);
  }
  return $;
};
export const getJSF = function (J, Z) {
  const Q = [[], []];
  J = J.clone();
  Z = Z.clone();
  for (let $ = 0, tt = 0; J.cmpn(-$) > 0 || Z.cmpn(-tt) > 0;) {
    let te;
    let tr;
    let tn;
    let ti = (J.andln(3) + $) & 3;
    let to = (Z.andln(3) + tt) & 3;
    if (ti === 3) {
      ti = -1;
    }
    if (to === 3) {
      to = -1;
    }
    tr =
      (1 & ti) == 0
        ? 0
        : ((te = (J.andln(7) + $) & 7) == 3 || te === 5) && to === 2
          ? -ti
          : ti;
    Q[0].push(tr);
    tn =
      (1 & to) == 0
        ? 0
        : ((te = (Z.andln(7) + tt) & 7) == 3 || te === 5) && ti === 2
          ? -to
          : to;
    Q[1].push(tn);
    if (2 * $ === tr + 1) {
      $ = 1 - $;
    }
    if (2 * tt === tn + 1) {
      tt = 1 - tt;
    }
    J.iushrn(1);
    Z.iushrn(1);
  }
  return Q;
};
export const cachedProperty = function (J, Z, Q) {
  const $ = "_" + Z;
  J.prototype[Z] = function () {
    if (this[$] !== undefined) {
      return this[$];
    }
    return (this[$] = Q.call(this));
  };
};
export const parseBytes = function (J) {
  if (typeof J === "string") {
    return toArray(J, "hex");
  }
  return J;
};
export const intFromLE = function (J) {
  return new $(J, "hex", "le");
};
