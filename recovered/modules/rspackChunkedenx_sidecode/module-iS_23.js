require("./module-A_24.js")(
  {
    target: "Math",
    stat: true,
    forced: true,
  },
  {
    umulh: function (t, r) {
      const e = +t;
      const n = +r;
      const o = 65535 & e;
      const i = 65535 & n;
      const a = e >>> 16;
      const s = n >>> 16;
      const c = ((a * i) >>> 0) + ((o * i) >>> 16);
      return a * s + (c >>> 16) + ((((o * s) >>> 0) + (65535 & c)) >>> 16);
    },
  },
);
