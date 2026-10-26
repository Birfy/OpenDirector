import n from "g";
import i from "o";
import a from "B";
import o from "H";
import s from "Fm";
import A from "UF";
import forced from "K";
const A_Map = A.Map;
const A_has = A.has;
const A_get = A.get;
const A_set = A.set;
const g = i([].push);
n(
  {
    target: "Map",
    stat: true,
    forced,
  },
  {
    groupBy: function (t, e) {
      o(t);
      a(e);
      const r = new A_Map();
      let n = 0;
      s(t, function (t) {
        const i = e(t, n++);
        if (A_has(r, i)) {
          g(A_get(r, i), t);
        } else {
          A_set(r, i, [t]);
        }
      });
      return r;
    },
  },
);
