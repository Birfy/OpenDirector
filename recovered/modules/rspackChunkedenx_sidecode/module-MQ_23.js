import n from "./module-J_23.js";
import i from "./module-Yj_22.js";
import o from "./module-X_23.js";
import s from "./module-vo_22.js";
import a from "./module-ze_23.js";
import u from "./module-vB_24.js";
import c from "./module-Ct_22.js";
import f from "./module-yv_22.js";
import h from "./module-G_2_22.js";
import l from "./module-sb_24.js";
const u_aTypedArray = u.aTypedArray;
const u_exportTypedArrayMethod = u.exportTypedArrayMethod;
const n_Uint16Array = n.Uint16Array;
const g = n_Uint16Array && i(n_Uint16Array.prototype.sort);
const y =
  !!g &&
  !(
    o(function () {
      g(new n_Uint16Array(2), null);
    }) &&
    o(function () {
      g(new n_Uint16Array(2), {});
    })
  );
const b =
  !!g &&
  !o(function () {
    if (h) {
      return h < 74;
    }
    if (c) {
      return c < 67;
    }
    if (f) {
      return true;
    }
    if (l) {
      return l < 602;
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
u_exportTypedArrayMethod(
  "sort",
  function (t) {
    if (t !== undefined) {
      s(t);
    }
    if (b) {
      return g(this, t);
    }
    return a(u_aTypedArray(this), function (r, e) {
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
  !b || y,
);
