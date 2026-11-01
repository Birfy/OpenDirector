import n from "./module-A_14.js";
import o from "./module-Ho_14.js";
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
    acosh: function (r) {
      const t = +r;
      if (t < 1) {
        return 0 / 0;
      }
      if (t > 94906265.62425156) {
        return Math.log(t) + Math.LN2;
      }
      return o(t - 1 + Math.sqrt(t - 1) * Math.sqrt(t + 1));
    },
  },
);
