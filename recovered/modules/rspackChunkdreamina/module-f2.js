import n from "g";
import i from "B";
import a from "vP";
import o from "UF";
const o_get = o.get;
const o_has = o.has;
const o_set = o.set;
n(
  {
    target: "Map",
    proto: true,
    real: true,
    forced: true,
  },
  {
    update: function (t, e) {
      const r = a(this);
      const arguments_length = arguments.length;
      i(e);
      const o = o_has(r, t);
      if (!o && arguments_length < 3) {
        throw TypeError("Updating absent value");
      }
      const l = o
        ? o_get(r, t)
        : i(arguments_length > 2 ? arguments[2] : undefined)(t, r);
      o_set(r, t, e(l, t, r));
      return r;
    },
  },
);
