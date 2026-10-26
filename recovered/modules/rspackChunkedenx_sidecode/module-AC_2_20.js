import n from "./module-A_21.js";
import o from "./module-mS_21.js";
import i from "./module-MU_20.js";
import a from "./module-F4_21.js";
import s from "./module-j_2_20.js";
import c from "./module-F_21.js";
import u from "./module-V6_21.js";
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
      const p = c(this);
      const d = a(p);
      const g = s(t, d);
      const arguments_length = arguments.length;
      let m = 0;
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
          n = Math.min(Math.max(u(r), 0), d - g);
      }
      for (v = Array((o = i(d + e - n))); m < g; m++) {
        v[m] = p[m];
      }
      for (; m < g + e; m++) {
        v[m] = arguments[m - g + 2];
      }
      for (; m < o; m++) {
        v[m] = p[m + n - e];
      }
      return v;
    },
  },
);
o("toSpliced");
