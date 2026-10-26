import n from "./module-g.js";
import o from "./module-O_2.js";
import i from "./module-OG_2.js";
import a from "./module-Ok_2.js";
import s from "./module-Yz_2.js";
n(
  {
    target: "Array",
    proto: true,
  },
  {
    at: function (e) {
      const t = o(this);
      const r = i(t);
      const n = a(e);
      const s = n >= 0 ? n : r + n;
      if (s < 0 || s >= r) {
        return undefined;
      }
      return t[s];
    },
  },
);
s("at");
