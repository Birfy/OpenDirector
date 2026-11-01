"use strict";
require("g")(
  {
    target: "Math",
    stat: true,
    forced: true,
  },
  {
    umulh: function (t, e) {
      const r = +t;
      const n = +e;
      const i = 65535 & r;
      const a = 65535 & n;
      const o = r >>> 16;
      const s = n >>> 16;
      const A = ((o * a) >>> 0) + ((i * a) >>> 16);
      return o * s + (A >>> 16) + ((((i * s) >>> 0) + (65535 & A)) >>> 16);
    },
  },
);
