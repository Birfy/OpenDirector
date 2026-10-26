require("./module-A_10.js")(
  {
    target: "Math",
    stat: true,
    forced: true,
  },
  {
    signbit: function (t) {
      const e = +t;
      if (e == e && e === 0) {
        return 1 / e == -Infinity;
      }
      return e < 0;
    },
  },
);
