import n from "./module-g.js";
import o from "./module-uB_2.js";
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
    acosh: function (e) {
      const t = +e;
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
