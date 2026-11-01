require("./module-A_7.js")(
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
      const a = 65535 & n;
      const i = e >>> 16;
      const s = n >>> 16;
      const c = ((i * a) >>> 0) + ((o * a) >>> 16);
      return i * s + (c >>> 16) + ((((o * s) >>> 0) + (65535 & c)) >>> 16);
    },
  },
);
