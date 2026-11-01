import n from "./module-A_20.js";
import o from "./module-mS_20.js";
import i from "./module-MU_19.js";
import a from "./module-F4_20.js";
import s from "./module-j_2_19.js";
import u from "./module-F_20.js";
import c from "./module-V6_20.js";
n(
  {
    target: "Array",
    proto: true,
  },
  {
    toSpliced: function (r, t) {
      let e;
      let n;
      let o;
      let v;
      const p = u(this);
      const d = a(p);
      const g = s(r, d);
      const arguments_length = arguments.length;
      let b = 0;
      switch (arguments_length) {
        case 0:
          n = 0;
          e = 0;
          break;
        case 1:
          e = 0;
          n = d - g;
          break;
        default:
          e = arguments_length - 2;
          n = Math.min(Math.max(c(t), 0), d - g);
      }
      for (v = Array((o = i(d + e - n))); b < g; b++) {
        v[b] = p[b];
      }
      for (; b < g + e; b++) {
        v[b] = arguments[b - g + 2];
      }
      for (; b < o; b++) {
        v[b] = p[b + n - e];
      }
      return v;
    },
  },
);
o("toSpliced");
