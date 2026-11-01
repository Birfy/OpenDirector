import n from "./module-A_10.js";
import o from "./module-Ho_10.js";
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
      const e = +t;
      if (e < 1) {
        return 0 / 0;
      }
      if (e > 94906265.62425156) {
        return Math.log(e) + Math.LN2;
      }
      return o(e - 1 + Math.sqrt(e - 1) * Math.sqrt(e + 1));
    },
  },
);
