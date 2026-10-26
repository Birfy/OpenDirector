import n from "./module-A.js";
import o from "./module-O9.js";
import i from "./module-vo.js";
import a from "./module-aq.js";
import s from "./module-F4.js";
import u from "./module-bp.js";
import c from "./module-ng.js";
import f from "./module-X.js";
import h from "./module-ze.js";
import l from "./module-bYn.js";
import v from "./module-Ct.js";
import p from "./module-yv.js";
import d from "./module-G_2.js";
import g from "./module-sb.js";
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
      h(o, function (r, e) {
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
