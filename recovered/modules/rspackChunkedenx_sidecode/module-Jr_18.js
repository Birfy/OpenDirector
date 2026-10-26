import n from "./module-A_19.js";
n(
  {
    target: "Math",
    stat: true,
    arity: 2,
    forced: !!Math.hypot && Infinity !== Math.hypot(Infinity, 0 / 0),
  },
  {
    hypot: function (r, t) {
      let e;
      let n;
      let o = 0;
      for (var s = 0, u = arguments.length, c = 0; s < u;) {
        e = Math.abs(arguments[s++]);
        if (c < e) {
          o = o * (n = c / e) * n + 1;
          c = e;
        } else if (e > 0) {
          o += (n = e / c) * n;
        } else {
          o += e;
        }
      }
      if (Infinity === c) {
        return Infinity;
      }
      return c * Math.sqrt(o);
    },
  },
);
