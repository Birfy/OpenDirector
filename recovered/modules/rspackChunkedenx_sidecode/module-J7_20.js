"use strict";
require("./module-A_21.js")(
  {
    target: "Math",
    stat: true,
    forced: true,
  },
  {
    iaddh: function (t, r, e, n) {
      const o = t >>> 0;
      const i = e >>> 0;
      return (
        ((r >>> 0) +
          (n >>> 0) +
          (((o & i) | ((o | i) & ~((o + i) >>> 0))) >>> 31)) |
        0
      );
    },
  },
);
