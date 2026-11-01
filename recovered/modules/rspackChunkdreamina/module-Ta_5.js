"use strict";
require("g")(
  {
    target: "Math",
    stat: true,
    forced: true,
  },
  {
    iaddh: function (t, e, r, n) {
      const i = t >>> 0;
      const a = r >>> 0;
      return (
        ((e >>> 0) +
          (n >>> 0) +
          (((i & a) | ((i | a) & ~((i + a) >>> 0))) >>> 31)) |
        0
      );
    },
  },
);
