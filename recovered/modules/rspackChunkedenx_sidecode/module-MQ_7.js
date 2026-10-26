import n from "./module-J_7.js";
import o from "./module-Yj_6.js";
import a from "./module-X_7.js";
import i from "./module-vo_6.js";
import s from "./module-ze_7.js";
import c from "./module-vB_8.js";
import u from "./module-Ct_6.js";
import f from "./module-yv_6.js";
import l from "./module-G_2_6.js";
import h from "./module-sb_8.js";
const c_aTypedArray = c.aTypedArray;
const c_exportTypedArrayMethod = c.exportTypedArrayMethod;
const n_Uint16Array = n.Uint16Array;
const g = n_Uint16Array && o(n_Uint16Array.prototype.sort);
const y =
  !!g &&
  !(
    a(function () {
      g(new n_Uint16Array(2), null);
    }) &&
    a(function () {
      g(new n_Uint16Array(2), {});
    })
  );
const m =
  !!g &&
  !a(function () {
    if (l) {
      return l < 74;
    }
    if (u) {
      return u < 67;
    }
    if (f) {
      return true;
    }
    if (h) {
      return h < 602;
    }
    let t;
    let r;
    const e = new n_Uint16Array(516);
    const n = Array(516);
    for (t = 0; t < 516; t++) {
      r = t % 4;
      e[t] = 515 - t;
      n[t] = t - 2 * r + 3;
    }
    g(e, function (t, r) {
      return ((t / 4) | 0) - ((r / 4) | 0);
    });
    for (t = 0; t < 516; t++) {
      if (e[t] !== n[t]) {
        return true;
      }
    }
  });
c_exportTypedArrayMethod(
  "sort",
  function (t) {
    if (t !== undefined) {
      i(t);
    }
    if (m) {
      return g(this, t);
    }
    return s(c_aTypedArray(this), function (r, e) {
      if (t !== undefined) {
        return +t(r, e) || 0;
      }
      if (e != e) {
        return -1;
      }
      if (r != r) {
        return 1;
      }
      if (r === 0 && e === 0) {
        if (1 / r > 0 && 1 / e < 0) {
          return 1;
        }
        return -1;
      }
      return r > e;
    });
  },
  !m || y,
);
