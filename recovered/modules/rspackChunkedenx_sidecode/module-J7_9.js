require("./module-A_10.js")(
  {
    target: "Math",
    stat: true,
    forced: true,
  },
  {
    iaddh: function (t, e, r, n) {
      const o = t >>> 0;
      const i = r >>> 0;
      return (
        ((e >>> 0) +
          (n >>> 0) +
          (((o & i) | ((o | i) & ~((o + i) >>> 0))) >>> 31)) |
        0
      );
    },
  },
);
