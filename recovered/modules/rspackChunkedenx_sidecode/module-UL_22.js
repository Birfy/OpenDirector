"use strict";
require("./module-A_23.js")(
  {
    target: "Math",
    stat: true,
    forced: true,
  },
  {
    isubh: function (t, r, e, n) {
      const i = t >>> 0;
      const o = e >>> 0;
      return (
        ((r >>> 0) -
          (n >>> 0) -
          (((~i & o) | (~(i ^ o) & ((i - o) >>> 0))) >>> 31)) |
        0
      );
    },
  },
);
