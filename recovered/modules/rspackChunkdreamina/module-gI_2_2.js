import n from "g";
import i from "fM";
import a from "V2";
import o from "Do";
import s from "Ip";
const o_Set = o.Set;
const o_add = o.add;
n(
  {
    target: "Set",
    proto: true,
    real: true,
    forced: true,
  },
  {
    map: function (t) {
      const e = a(this);
      const r = i(t, arguments.length > 1 ? arguments[1] : undefined);
      const n = new o_Set();
      s(e, function (t) {
        o_add(n, r(t, t, e));
      });
      return n;
    },
  },
);
