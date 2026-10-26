import n from "./module-A_11.js";
import o from "./module-O9_10.js";
import i from "./module-vo_10.js";
import a from "./module-aq_10.js";
import s from "./module-F4_11.js";
import u from "./module-bp_10.js";
import c from "./module-ng_11.js";
import f from "./module-X_11.js";
import l from "./module-ze_11.js";
import h from "./module-bYn_10.js";
import v from "./module-Ct_10.js";
import p from "./module-yv_10.js";
import d from "./module-G_2_10.js";
import g from "./module-sb_12.js";
const y = [];
const b = o(y.sort);
const m = o(y.push);
const A = f(function () {
  y.sort(undefined);
});
const x = f(function () {
  y.sort(null);
});
const w = h("sort");
const S = !f(function () {
  if (d) {
    return d < 70;
  }
  if (!v || !(v > 3)) {
    if (p) {
      return true;
    }
    if (g) {
      return g < 603;
    }
    let t;
    let r;
    let v_1;
    let n;
    let o = "";
    for (t = 65; t < 76; t++) {
      r = String.fromCharCode(t);
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
          k: r + n,
          v: v_1,
        });
      }
    }
    y.sort((t, r) => r.v - t.v);
    for (n = 0; n < y.length; n++) {
      r = y[n].k.charAt(0);
      if (o.charAt(o.length - 1) !== r) {
        o += r;
      }
    }
    return o !== "DGBEFHACIJK";
  }
});
n(
  {
    target: "Array",
    proto: true,
    forced: A || !x || !w || !S,
  },
  {
    sort: function (t) {
      if (t !== undefined) {
        i(t);
      }
      let r;
      let e;
      const n = a(this);
      if (S) {
        if (t === undefined) {
          return b(n);
        }
        return b(n, t);
      }
      const o = [];
      const f = s(n);
      for (e = 0; e < f; e++) {
        if (e in n) {
          m(o, n[e]);
        }
      }
      l(o, function (r, e) {
        if (e === undefined) {
          return -1;
        }
        if (r === undefined) {
          return 1;
        }
        if (t !== undefined) {
          return +t(r, e) || 0;
        }
        if (c(r) > c(e)) {
          return 1;
        }
        return -1;
      });
      r = s(o);
      for (e = 0; e < r;) {
        n[e] = o[e++];
      }
      while (e < f) {
        u(n, e++);
      }
      return n;
    },
  },
);
