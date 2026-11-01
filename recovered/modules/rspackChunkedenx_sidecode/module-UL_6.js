require("./module-A_7.js")(
  {
    target: "Math",
    stat: true,
    forced: true,
  },
  {
    isubh: function (t, r, e, n) {
      const o = t >>> 0;
      const a = e >>> 0;
      return (
        ((r >>> 0) -
          (n >>> 0) -
          (((~o & a) | (~(o ^ a) & ((o - a) >>> 0))) >>> 31)) |
        0
      );
    },
  },
);
