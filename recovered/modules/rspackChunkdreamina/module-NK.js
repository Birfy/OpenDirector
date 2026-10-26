import n from "./module-g.js";
n(
  {
    target: "Math",
    stat: true,
    arity: 2,
    forced: !!Math.hypot && Infinity !== Math.hypot(Infinity, 0 / 0),
  },
  {
    hypot: function (e, t) {
      let r;
      let n;
      let o = 0;
      for (var s = 0, u = arguments.length, c = 0; s < u;) {
        r = Math.abs(arguments[s++]);
        if (c < r) {
          o = o * (n = c / r) * n + 1;
          c = r;
        } else if (r > 0) {
          o += (n = r / c) * n;
        } else {
          o += r;
        }
      }
      if (Infinity === c) {
        return Infinity;
      }
      return c * Math.sqrt(o);
    },
  },
);
