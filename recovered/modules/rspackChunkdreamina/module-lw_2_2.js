import n from "./module-g.js";
import o from "./module-o.js";
import i from "./module-B.js";
import a from "./module-O_2.js";
import s from "./module-OG_2.js";
import u from "./module-Xc_3.js";
import c from "./module-BC_2.js";
import f from "./module-VV_4.js";
import l from "./module-DD.js";
import p from "./module-ms.js";
import h from "./module-lo_2.js";
import v from "./module-BX_2.js";
import d from "./module-z_2.js";
import g from "./module-uT_3.js";
const y = [];
const m = o(y.sort);
const x = o(y.push);
const b = f(function () {
  y.sort(undefined);
});
const w = f(function () {
  y.sort(null);
});
const A = p("sort");
const E = !f(function () {
  if (d) {
    return d < 70;
  }
  if (!h || !(h > 3)) {
    if (v) {
      return true;
    }
    if (g) {
      return g < 603;
    }
    let e;
    let t;
    let v_1;
    let n;
    let o = "";
    for (e = 65; e < 76; e++) {
      t = String.fromCharCode(e);
      switch (e) {
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
    y.sort((e, t) => t.v - e.v);
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
    forced: b || !w || !A || !E,
  },
  {
    sort: function (e) {
      if (e !== undefined) {
        i(e);
      }
      let t;
      let r;
      const n = a(this);
      if (E) {
        if (e === undefined) {
          return m(n);
        }
        return m(n, e);
      }
      const o = [];
      const f = s(n);
      for (r = 0; r < f; r++) {
        if (r in n) {
          x(o, n[r]);
        }
      }
      l(o, function (t, r) {
        if (r === undefined) {
          return -1;
        }
        if (t === undefined) {
          return 1;
        }
        if (e !== undefined) {
          return +e(t, r) || 0;
        }
        if (c(t) > c(r)) {
          return 1;
        }
        return -1;
      });
      t = s(o);
      for (r = 0; r < t;) {
        n[r] = o[r++];
      }
      while (r < f) {
        u(n, r++);
      }
      return n;
    },
  },
);
