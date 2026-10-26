require("./module-A_20.js")(
  {
    target: "Math",
    stat: true,
    forced: true,
  },
  {
    umulh: function (r, t) {
      const e = +r;
      const n = +t;
      const o = 65535 & e;
      const i = 65535 & n;
      const a = e >>> 16;
      const s = n >>> 16;
      const u = ((a * i) >>> 0) + ((o * i) >>> 16);
      return a * s + (u >>> 16) + ((((o * s) >>> 0) + (65535 & u)) >>> 16);
    },
  },
);
