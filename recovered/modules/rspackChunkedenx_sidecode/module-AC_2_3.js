import n from "./module-A_4.js";
import i from "./module-mS_4.js";
import o from "./module-MU_3.js";
import s from "./module-F4_4.js";
import a from "./module-j_2_3.js";
import u from "./module-F_4.js";
import c from "./module-V6_4.js";
n(
  {
    target: "Array",
    proto: true,
  },
  {
    toSpliced: function (t, r) {
      let e;
      let n;
      let i;
      let v;
      const p = u(this);
      const d = s(p);
      const g = a(t, d);
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
      for (v = Array((i = o(d + e - n))); b < g; b++) {
        v[b] = p[b];
      }
      for (; b < g + e; b++) {
        v[b] = arguments[b - g + 2];
      }
      for (; b < i; b++) {
        v[b] = p[b + n - e];
      }
      return v;
    },
  },
);
i("toSpliced");
