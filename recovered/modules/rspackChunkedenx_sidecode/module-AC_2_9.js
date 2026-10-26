import n from "./module-A_10.js";
import o from "./module-mS_10.js";
import i from "./module-MU_9.js";
import a from "./module-F4_10.js";
import s from "./module-j_2_9.js";
import u from "./module-F_10.js";
import c from "./module-V6_10.js";
n(
  {
    target: "Array",
    proto: true,
  },
  {
    toSpliced: function (t, e) {
      let r;
      let n;
      let o;
      let v;
      const d = u(this);
      const p = a(d);
      const g = s(t, p);
      const arguments_length = arguments.length;
      let m = 0;
      switch (arguments_length) {
        case 0:
          n = 0;
          r = 0;
          break;
        case 1:
          r = 0;
          n = p - g;
          break;
        default:
          r = arguments_length - 2;
          n = Math.min(Math.max(c(e), 0), p - g);
      }
      for (v = Array((o = i(p + r - n))); m < g; m++) {
        v[m] = d[m];
      }
      for (; m < g + r; m++) {
        v[m] = arguments[m - g + 2];
      }
      for (; m < o; m++) {
        v[m] = d[m + n - r];
      }
      return v;
    },
  },
);
o("toSpliced");
