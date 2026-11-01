import n from "./module-A_7.js";
import o from "./module-mS_7.js";
import a from "./module-MU_6.js";
import i from "./module-F4_7.js";
import s from "./module-j_2_6.js";
import c from "./module-F_7.js";
import u from "./module-V6_7.js";
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
      let p;
      const v = c(this);
      const d = i(v);
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
      for (p = Array((o = a(d + e - n))); m < g; m++) {
        p[m] = v[m];
      }
      for (; m < g + e; m++) {
        p[m] = arguments[m - g + 2];
      }
      for (; m < o; m++) {
        p[m] = v[m + n - e];
      }
      return p;
    },
  },
);
o("toSpliced");
