import n from "./module-u.js";
import o from "./module-Kp.js";
import i from "./module-VV_4.js";
import a from "./module-B.js";
import s from "./module-DD.js";
import u from "./module-ga_2.js";
import c from "./module-lo_2.js";
import f from "./module-BX_2.js";
import l from "./module-z_2.js";
import p from "./module-uT_3.js";
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
    if (p) {
      return p < 602;
    }
    let e;
    let t;
    const r = new n_Uint16Array(516);
    const n = Array(516);
    for (e = 0; e < 516; e++) {
      t = e % 4;
      r[e] = 515 - e;
      n[e] = e - 2 * t + 3;
    }
    g(r, function (e, t) {
      return ((e / 4) | 0) - ((t / 4) | 0);
    });
    for (e = 0; e < 516; e++) {
      if (r[e] !== n[e]) {
        return true;
      }
    }
  });
u_exportTypedArrayMethod(
  "sort",
  function (e) {
    if (e !== undefined) {
      a(e);
    }
    if (m) {
      return g(this, e);
    }
    return s(u_aTypedArray(this), function (t, r) {
      if (e !== undefined) {
        return +e(t, r) || 0;
      }
      if (r != r) {
        return -1;
      }
      if (t != t) {
        return 1;
      }
      if (t === 0 && r === 0) {
        if (1 / t > 0 && 1 / r < 0) {
          return 1;
        }
        return -1;
      }
      return t > r;
    });
  },
  !m || y,
);
