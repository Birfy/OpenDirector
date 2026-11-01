import n from "./module-A.js";
import o from "./module-Ho.js";
n(
  {
    target: "Math",
    stat: true,
    forced:
      !Math.acosh ||
      Math.floor(Math.acosh(Number.MAX_VALUE)) !== 710 ||
      Infinity !== Math.acosh(Infinity),
  },
  {
    acosh: function (t) {
      const r = +t;
      if (r < 1) {
        return 0 / 0;
      }
      if (r > 94906265.62425156) {
        return Math.log(r) + Math.LN2;
      }
      return o(r - 1 + Math.sqrt(r - 1) * Math.sqrt(r + 1));
    },
  },
);
