import n from "./module-A_24.js";
n(
  {
    target: "Math",
    stat: true,
    arity: 2,
    forced: !!Math.hypot && Infinity !== Math.hypot(Infinity, 0 / 0),
  },
  {
    hypot: function (t, r) {
      let e;
      let n;
      let o = 0;
      for (var s = 0, c = arguments.length, u = 0; s < c;) {
        e = Math.abs(arguments[s++]);
        if (u < e) {
          o = o * (n = u / e) * n + 1;
          u = e;
        } else if (e > 0) {
          o += (n = e / u) * n;
        } else {
          o += e;
        }
      }
      if (Infinity === u) {
        return Infinity;
      }
      return u * Math.sqrt(o);
    },
  },
);
