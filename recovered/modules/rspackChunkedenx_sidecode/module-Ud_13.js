"use strict";
require("./module-A_13.js")(
  {
    target: "Math",
    stat: true,
    forced: true,
  },
  {
    signbit: function (J) {
      const Z = +J;
      if (Z == Z && Z === 0) {
        return 1 / Z == -Infinity;
      }
      return Z < 0;
    },
  },
);
