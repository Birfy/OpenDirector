require("./module-A_10.js")(
  {
    target: "Math",
    stat: true,
    forced: true,
  },
  {
    imulh: function (t, e) {
      const r = +t;
      const n = +e;
      const o = 65535 & r;
      const i = 65535 & n;
      const a = r >> 16;
      const s = n >> 16;
      const u = ((a * i) >>> 0) + ((o * i) >>> 16);
      return a * s + (u >> 16) + ((((o * s) >>> 0) + (65535 & u)) >> 16);
    },
  },
);
