require("./module-A_11.js")(
  {
    target: "Math",
    stat: true,
    forced: true,
  },
  {
    signbit: function (t) {
      const r = +t;
      if (r == r && r === 0) {
        return 1 / r == -Infinity;
      }
      return r < 0;
    },
  },
);
