import n from "./module-A_3.js";
import i from "./module-O9_2.js";
import o from "./module-vo_2.js";
import s from "./module-aq_2.js";
import a from "./module-F4_3.js";
import u from "./module-bp_2.js";
import c from "./module-ng_3.js";
import f from "./module-X_3.js";
import h from "./module-ze_3.js";
import l from "./module-bYn_2.js";
import v from "./module-Ct_2.js";
import p from "./module-yv_2.js";
import d from "./module-G_2_2.js";
import g from "./module-sb_4.js";
const y = [];
const b = i(y.sort);
const m = i(y.push);
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
    let t;
    let r;
    let v_1;
    let n;
    let i = "";
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
      if (i.charAt(i.length - 1) !== r) {
        i += r;
      }
    }
    return i !== "DGBEFHACIJK";
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
        o(t);
      }
      let r;
      let e;
      const n = s(this);
      if (S) {
        if (t === undefined) {
          return b(n);
        }
        return b(n, t);
      }
      const i = [];
      const f = a(n);
      for (e = 0; e < f; e++) {
        if (e in n) {
          m(i, n[e]);
        }
      }
      h(i, function (r, e) {
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
      r = a(i);
      for (e = 0; e < r;) {
        n[e] = i[e++];
      }
      while (e < f) {
        u(n, e++);
      }
      return n;
    },
  },
);
