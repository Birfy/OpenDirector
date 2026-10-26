import n from "./module-A_7.js";
import o from "./module-O9_6.js";
import a from "./module-vo_6.js";
import i from "./module-aq_6.js";
import s from "./module-F4_7.js";
import c from "./module-bp_6.js";
import u from "./module-ng_7.js";
import f from "./module-X_7.js";
import l from "./module-ze_7.js";
import h from "./module-bYn_6.js";
import p from "./module-Ct_6.js";
import v from "./module-yv_6.js";
import d from "./module-G_2_6.js";
import g from "./module-sb_8.js";
const y = [];
const m = o(y.sort);
const b = o(y.push);
const A = f(function () {
  y.sort(undefined);
});
const w = f(function () {
  y.sort(null);
});
const x = h("sort");
const E = !f(function () {
  if (d) {
    return d < 70;
  }
  if (!p || !(p > 3)) {
    if (v) {
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
    forced: A || !w || !x || !E,
  },
  {
    sort: function (t) {
      if (t !== undefined) {
        a(t);
      }
      let r;
      let e;
      const n = i(this);
      if (E) {
        if (t === undefined) {
          return m(n);
        }
        return m(n, t);
      }
      const o = [];
      const f = s(n);
      for (e = 0; e < f; e++) {
        if (e in n) {
          b(o, n[e]);
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
        if (u(r) > u(e)) {
          return 1;
        }
        return -1;
      });
      r = s(o);
      for (e = 0; e < r;) {
        n[e] = o[e++];
      }
      while (e < f) {
        c(n, e++);
      }
      return n;
    },
  },
);
