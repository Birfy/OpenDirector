import n from "./module-A_16.js";
import o from "./module-O9_15.js";
import i from "./module-vo_15.js";
import a from "./module-aq_15.js";
import s from "./module-F4_16.js";
import u from "./module-bp_15.js";
import c from "./module-ng_16.js";
import f from "./module-X_16.js";
import h from "./module-ze_16.js";
import l from "./module-bYn_15.js";
import v from "./module-Ct_15.js";
import p from "./module-yv_15.js";
import d from "./module-G_2_15.js";
import g from "./module-sb_17.js";
const y = [];
const b = o(y.sort);
const m = o(y.push);
const A = f(function () {
  y.sort(undefined);
});
const x = f(function () {
  y.sort(null);
});
const w = l("sort");
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
    let r;
    let t;
    let v_1;
    let n;
    let o = "";
    for (r = 65; r < 76; r++) {
      t = String.fromCharCode(r);
      switch (r) {
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
          k: t + n,
          v: v_1,
        });
      }
    }
    y.sort((r, t) => t.v - r.v);
    for (n = 0; n < y.length; n++) {
      t = y[n].k.charAt(0);
      if (o.charAt(o.length - 1) !== t) {
        o += t;
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
    sort: function (r) {
      if (r !== undefined) {
        i(r);
      }
      let t;
      let e;
      const n = a(this);
      if (S) {
        if (r === undefined) {
          return b(n);
        }
        return b(n, r);
      }
      const o = [];
      const f = s(n);
      for (e = 0; e < f; e++) {
        if (e in n) {
          m(o, n[e]);
        }
      }
      h(o, function (t, e) {
        if (e === undefined) {
          return -1;
        }
        if (t === undefined) {
          return 1;
        }
        if (r !== undefined) {
          return +r(t, e) || 0;
        }
        if (c(t) > c(e)) {
          return 1;
        }
        return -1;
      });
      t = s(o);
      for (e = 0; e < t;) {
        n[e] = o[e++];
      }
      while (e < f) {
        u(n, e++);
      }
      return n;
    },
  },
);
