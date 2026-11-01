require("./module-A_8.js")(
  {
    target: "Math",
    stat: true,
    forced: true,
  },
  {
    signbit: function (r) {
      const t = +r;
      if (t == t && t === 0) {
        return 1 / t == -Infinity;
      }
      return t < 0;
    },
  },
);
