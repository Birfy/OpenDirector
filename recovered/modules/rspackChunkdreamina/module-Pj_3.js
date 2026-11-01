import n from "./module-g.js";
import o from "./module-Yz_2.js";
import i from "./module-Bw_2.js";
import a from "./module-OG_2.js";
import s from "./module-g2_2.js";
import u from "./module-MR.js";
import c from "./module-Ok_2.js";
n(
  {
    target: "Array",
    proto: true,
  },
  {
    toSpliced: function (e, t) {
      let r;
      let n;
      let o;
      let h;
      const v = u(this);
      const d = a(v);
      const g = s(e, d);
      const arguments_length = arguments.length;
      let m = 0;
      switch (arguments_length) {
        case 0:
          n = 0;
          r = 0;
          break;
        case 1:
          r = 0;
          n = d - g;
          break;
        default:
          r = arguments_length - 2;
          n = Math.min(Math.max(c(t), 0), d - g);
      }
      for (h = Array((o = i(d + r - n))); m < g; m++) {
        h[m] = v[m];
      }
      for (; m < g + r; m++) {
        h[m] = arguments[m - g + 2];
      }
      for (; m < o; m++) {
        h[m] = v[m + n - r];
      }
      return h;
    },
  },
);
o("toSpliced");
