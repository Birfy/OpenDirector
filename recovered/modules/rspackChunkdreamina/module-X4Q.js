import n from "g";
import i from "fM";
import a from "vP";
import o from "UF";
import s from "jnk";
const o_Map = o.Map;
const o_set = o.set;
n(
  {
    target: "Map",
    proto: true,
    real: true,
    forced: true,
  },
  {
    filter: function (t) {
      const e = a(this);
      const r = i(t, arguments.length > 1 ? arguments[1] : undefined);
      const n = new o_Map();
      s(e, function (t, i) {
        if (r(t, i, e)) {
          o_set(n, i, t);
        }
      });
      return n;
    },
  },
);
