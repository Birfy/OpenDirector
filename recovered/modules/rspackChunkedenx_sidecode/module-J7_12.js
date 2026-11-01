"use strict";
require("./module-A_13.js")(
  {
    target: "Math",
    stat: true,
    forced: true,
  },
  {
    iaddh: function (J, Z, Q, $) {
      const tt = J >>> 0;
      const te = Q >>> 0;
      return (
        ((Z >>> 0) +
          ($ >>> 0) +
          (((tt & te) | ((tt | te) & ~((tt + te) >>> 0))) >>> 31)) |
        0
      );
    },
  },
);
