import n from "g";
import i from "p3";
import a from "Fm";
import o from "r";
import s from "B";
import { Map } from "UF";
n(
  {
    target: "Map",
    stat: true,
    forced: true,
  },
  {
    keyBy: function (t, e) {
      const r = new (o(this) ? this : Map)();
      s(e);
      const n = s(r.set);
      a(t, function (t) {
        i(n, r, e(t), t);
      });
      return r;
    },
  },
);
