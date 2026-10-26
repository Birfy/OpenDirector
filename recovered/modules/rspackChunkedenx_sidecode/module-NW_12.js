import $ from "./module-A_13.js";
import tt from "./module-Ho_13.js";
$(
  {
    target: "Math",
    stat: true,
    forced:
      !Math.acosh ||
      Math.floor(Math.acosh(Number.MAX_VALUE)) !== 710 ||
      Infinity !== Math.acosh(Infinity),
  },
  {
    acosh: function (J) {
      const Z = +J;
      if (Z < 1) {
        return 0 / 0;
      }
      if (Z > 94906265.62425156) {
        return Math.log(Z) + Math.LN2;
      }
      return tt(Z - 1 + Math.sqrt(Z - 1) * Math.sqrt(Z + 1));
    },
  },
);
