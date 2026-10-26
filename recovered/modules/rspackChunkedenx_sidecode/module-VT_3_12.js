"use strict";
require("./module-A_13.js")(
  {
    target: "Math",
    stat: true,
    forced: true,
  },
  {
    imulh: function (J, Z) {
      const Q = +J;
      const $ = +Z;
      const tt = 65535 & Q;
      const te = 65535 & $;
      const tr = Q >> 16;
      const tn = $ >> 16;
      const ti = ((tr * te) >>> 0) + ((tt * te) >>> 16);
      return tr * tn + (ti >> 16) + ((((tt * tn) >>> 0) + (65535 & ti)) >> 16);
    },
  },
);
