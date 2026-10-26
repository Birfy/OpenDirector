import n from "./module-A_3.js";
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
      let i = 0;
      for (var a = 0, u = arguments.length, c = 0; a < u;) {
        e = Math.abs(arguments[a++]);
        if (c < e) {
          i = i * (n = c / e) * n + 1;
          c = e;
        } else if (e > 0) {
          i += (n = e / c) * n;
        } else {
          i += e;
        }
      }
      if (Infinity === c) {
        return Infinity;
      }
      return c * Math.sqrt(i);
    },
  },
);
