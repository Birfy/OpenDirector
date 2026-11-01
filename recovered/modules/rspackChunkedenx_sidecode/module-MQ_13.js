import $ from "./module-J_13.js";
import tt from "./module-Yj_12.js";
import te from "./module-X_13.js";
import tr from "./module-vo_12.js";
import tn from "./module-ze_13.js";
import ti from "./module-vB_14.js";
import to from "./module-Ct_12.js";
import ta from "./module-yv_2_2.js";
import ts from "./module-G_2_12.js";
import tf from "./module-sb_14.js";
const ti_aTypedArray = ti.aTypedArray;
const ti_exportTypedArrayMethod = ti.exportTypedArrayMethod;
const $_Uint16Array = $.Uint16Array;
const td = $_Uint16Array && tt($_Uint16Array.prototype.sort);
const tl =
  !!td &&
  !(
    te(function () {
      td(new $_Uint16Array(2), null);
    }) &&
    te(function () {
      td(new $_Uint16Array(2), {});
    })
  );
const tp =
  !!td &&
  !te(function () {
    if (ts) {
      return ts < 74;
    }
    if (to) {
      return to < 67;
    }
    if (ta) {
      return true;
    }
    if (tf) {
      return tf < 602;
    }
    let J;
    let Z;
    const Q = new $_Uint16Array(516);
    const $ = Array(516);
    for (J = 0; J < 516; J++) {
      Z = J % 4;
      Q[J] = 515 - J;
      $[J] = J - 2 * Z + 3;
    }
    td(Q, function (J, Z) {
      return ((J / 4) | 0) - ((Z / 4) | 0);
    });
    for (J = 0; J < 516; J++) {
      if (Q[J] !== $[J]) {
        return true;
      }
    }
  });
ti_exportTypedArrayMethod(
  "sort",
  function (J) {
    if (J !== undefined) {
      tr(J);
    }
    if (tp) {
      return td(this, J);
    }
    return tn(ti_aTypedArray(this), function (Z, Q) {
      if (J !== undefined) {
        return +J(Z, Q) || 0;
      }
      if (Q != Q) {
        return -1;
      }
      if (Z != Z) {
        return 1;
      }
      if (Z === 0 && Q === 0) {
        if (1 / Z > 0 && 1 / Q < 0) {
          return 1;
        }
        return -1;
      }
      return Z > Q;
    });
  },
  !tp || tl,
);
