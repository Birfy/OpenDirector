import n from "./module-J_10.js";
import o from "./module-Yj_9.js";
import i from "./module-X_10.js";
import a from "./module-vo_9.js";
import s from "./module-ze_10.js";
import u from "./module-vB_11.js";
import c from "./module-Ct_9.js";
import f from "./module-yv_9.js";
import l from "./module-G_2_9.js";
import h from "./module-sb_11.js";
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
const m =
  !!g &&
  !i(function () {
    if (l) {
      return l < 74;
    }
    if (c) {
      return c < 67;
    }
    if (f) {
      return true;
    }
    if (h) {
      return h < 602;
    }
    let t;
    let e;
    const r = new n_Uint16Array(516);
    const n = Array(516);
    for (t = 0; t < 516; t++) {
      e = t % 4;
      r[t] = 515 - t;
      n[t] = t - 2 * e + 3;
    }
    g(r, function (t, e) {
      return ((t / 4) | 0) - ((e / 4) | 0);
    });
    for (t = 0; t < 516; t++) {
      if (r[t] !== n[t]) {
        return true;
      }
    }
  });
u_exportTypedArrayMethod(
  "sort",
  function (t) {
    if (t !== undefined) {
      a(t);
    }
    if (m) {
      return g(this, t);
    }
    return s(u_aTypedArray(this), function (e, r) {
      if (t !== undefined) {
        return +t(e, r) || 0;
      }
      if (r != r) {
        return -1;
      }
      if (e != e) {
        return 1;
      }
      if (e === 0 && r === 0) {
        if (1 / e > 0 && 1 / r < 0) {
          return 1;
        }
        return -1;
      }
      return e > r;
    });
  },
  !m || y,
);
