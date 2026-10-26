import n from "./module-A_11.js";
import o from "./module-mS_11.js";
import i from "./module-MU_10.js";
import a from "./module-F4_11.js";
import s from "./module-j_2_10.js";
import u from "./module-F_11.js";
import c from "./module-V6_11.js";
n(
  {
    target: "Array",
    proto: true,
  },
  {
    toSpliced: function (t, r) {
      let e;
      let n;
      let o;
      let v;
      const p = u(this);
      const d = a(p);
      const g = s(t, d);
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
          n = Math.min(Math.max(c(r), 0), d - g);
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
