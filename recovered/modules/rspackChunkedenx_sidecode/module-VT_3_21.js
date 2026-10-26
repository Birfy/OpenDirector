"use strict";
require("./module-A_22.js")(
  {
    target: "Math",
    stat: true,
    forced: true,
  },
  {
    imulh: function (t, r) {
      const e = +t;
      const n = +r;
      const i = 65535 & e;
      const o = 65535 & n;
      const s = e >> 16;
      const a = n >> 16;
      const u = ((s * o) >>> 0) + ((i * o) >>> 16);
      return s * a + (u >> 16) + ((((i * a) >>> 0) + (65535 & u)) >> 16);
    },
  },
);
