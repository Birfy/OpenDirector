import n from "g";
import i from "o";
import a from "V2";
import o from "Ip";
import s from "BC";
const A = i([].join);
const c = i([].push);
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: true,
  },
  {
    join: function (t) {
      const e = a(this);
      const r = t === undefined ? "," : s(t);
      const n = [];
      o(e, function (t) {
        c(n, t);
      });
      return A(n, r);
    },
  },
);
