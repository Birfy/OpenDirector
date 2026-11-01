require("./module-A_20.js")(
  {
    target: "Math",
    stat: true,
    forced: true,
  },
  {
    isubh: function (r, t, e, n) {
      const o = r >>> 0;
      const i = e >>> 0;
      return (
        ((t >>> 0) -
          (n >>> 0) -
          (((~o & i) | (~(o ^ i) & ((o - i) >>> 0))) >>> 31)) |
        0
      );
    },
  },
);
