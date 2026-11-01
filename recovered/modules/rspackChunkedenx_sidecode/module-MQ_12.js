import n from "./module-J_12.js";
import o from "./module-Yj_11.js";
import i from "./module-X_12.js";
import a from "./module-vo_11.js";
import s from "./module-ze_12.js";
import u from "./module-vB_13.js";
import c from "./module-Ct_11.js";
import f from "./module-yv_11.js";
import h from "./module-G_2_11.js";
import l from "./module-sb_13.js";
const u_aTypedArray = u.aTypedArray;
const u_exportTypedArrayMethod = u.exportTypedArrayMethod;
const n_Uint16Array = n.Uint16Array;
const g = n_Uint16Array && o(n_Uint16Array.prototype.sort);
const y =
  !!g &&
  !(
    i(function () {
      g(new n_Uint16Array(2), null);
    }) &&
    i(function () {
      g(new n_Uint16Array(2), {});
    })
  );
const b =
  !!g &&
  !i(function () {
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
    let r;
    let t;
    const e = new n_Uint16Array(516);
    const n = Array(516);
    for (r = 0; r < 516; r++) {
      t = r % 4;
      e[r] = 515 - r;
      n[r] = r - 2 * t + 3;
    }
    g(e, function (r, t) {
      return ((r / 4) | 0) - ((t / 4) | 0);
    });
    for (r = 0; r < 516; r++) {
      if (e[r] !== n[r]) {
        return true;
      }
    }
  });
u_exportTypedArrayMethod(
  "sort",
  function (r) {
    if (r !== undefined) {
      a(r);
    }
    if (b) {
      return g(this, r);
    }
    return s(u_aTypedArray(this), function (t, e) {
      if (r !== undefined) {
        return +r(t, e) || 0;
      }
      if (e != e) {
        return -1;
      }
      if (t != t) {
        return 1;
      }
      if (t === 0 && e === 0) {
        if (1 / t > 0 && 1 / e < 0) {
          return 1;
        }
        return -1;
      }
      return t > e;
    });
  },
  !b || y,
);
