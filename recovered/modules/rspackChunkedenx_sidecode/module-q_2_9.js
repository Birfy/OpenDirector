import n from "./module-A_10.js";
import o from "./module-O9_9.js";
import i from "./module-vo_9.js";
import a from "./module-aq_9.js";
import s from "./module-F4_10.js";
import u from "./module-bp_9.js";
import c from "./module-ng_10.js";
import f from "./module-X_10.js";
import l from "./module-ze_10.js";
import h from "./module-bYn_9.js";
import v from "./module-Ct_9.js";
import d from "./module-yv_9.js";
import p from "./module-G_2_9.js";
import g from "./module-sb_11.js";
const y = [];
const m = o(y.sort);
const b = o(y.push);
const w = f(function () {
  y.sort(undefined);
});
const A = f(function () {
  y.sort(null);
});
const x = h("sort");
const E = !f(function () {
  if (p) {
    return p < 70;
  }
  if (!v || !(v > 3)) {
    if (d) {
      return true;
    }
    if (g) {
      return g < 603;
    }
    let t;
    let e;
    let v_1;
    let n;
    let o = "";
    for (t = 65; t < 76; t++) {
      e = String.fromCharCode(t);
      switch (t) {
        case 66:
        case 69:
        case 70:
        case 72:
          v_1 = 3;
          break;
        case 68:
        case 71:
          v_1 = 4;
          break;
        default:
          v_1 = 2;
      }
      for (n = 0; n < 47; n++) {
        y.push({
          k: e + n,
          v: v_1,
        });
      }
    }
    y.sort((t, e) => e.v - t.v);
    for (n = 0; n < y.length; n++) {
      e = y[n].k.charAt(0);
      if (o.charAt(o.length - 1) !== e) {
        o += e;
      }
    }
    return o !== "DGBEFHACIJK";
  }
});
n(
  {
    target: "Array",
    proto: true,
    forced: w || !A || !x || !E,
  },
  {
    sort: function (t) {
      if (t !== undefined) {
        i(t);
      }
      let e;
      let r;
      const n = a(this);
      if (E) {
        if (t === undefined) {
          return m(n);
        }
        return m(n, t);
      }
      const o = [];
      const f = s(n);
      for (r = 0; r < f; r++) {
        if (r in n) {
          b(o, n[r]);
        }
      }
      l(o, function (e, r) {
        if (r === undefined) {
          return -1;
        }
        if (e === undefined) {
          return 1;
        }
        if (t !== undefined) {
          return +t(e, r) || 0;
        }
        if (c(e) > c(r)) {
          return 1;
        }
        return -1;
      });
      e = s(o);
      for (r = 0; r < e;) {
        n[r] = o[r++];
      }
      while (r < f) {
        u(n, r++);
      }
      return n;
    },
  },
);
