import $ from "./module-A_13.js";
$(
  {
    target: "Math",
    stat: true,
    arity: 2,
    forced: !!Math.hypot && Infinity !== Math.hypot(Infinity, 0 / 0),
  },
  {
    hypot: function (J, Z) {
      let Q;
      let $;
      let tt = 0;
      for (var tn = 0, ti = arguments.length, to = 0; tn < ti;) {
        Q = Math.abs(arguments[tn++]);
        if (to < Q) {
          tt = tt * ($ = to / Q) * $ + 1;
          to = Q;
        } else if (Q > 0) {
          tt += ($ = Q / to) * $;
        } else {
          tt += Q;
        }
      }
      if (Infinity === to) {
        return Infinity;
      }
      return to * Math.sqrt(tt);
    },
  },
);
