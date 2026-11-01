import n from "g";
import i from "Y";
import a from "o";
import o from "B";
import s from "H";
import A from "c";
import c from "Fm";
const u = i("Object", "create");
const l = a([].push);
n(
  {
    target: "Object",
    stat: true,
  },
  {
    groupBy: function (t, e) {
      s(t);
      o(e);
      const r = u(null);
      let n = 0;
      c(t, function (t) {
        const i = A(e(t, n++));
        if (i in r) {
          l(r[i], t);
        } else {
          r[i] = [t];
        }
      });
      return r;
    },
  },
);
