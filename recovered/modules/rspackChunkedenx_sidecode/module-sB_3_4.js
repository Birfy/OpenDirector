import n from "./module-A_5.js";
import i from "./module-vo_4.js";
import o from "./module-ot_5.js";
import s from "./module-e7_4.js";
const s_get = s.get;
const s_has = s.has;
const s_set = s.set;
n(
  {
    target: "Map",
    proto: true,
    real: true,
    forced: true,
  },
  {
    update: function (t, r) {
      const e = o(this);
      const arguments_length = arguments.length;
      i(r);
      const s = s_has(e, t);
      if (!s && arguments_length < 3) {
        throw TypeError("Updating absent value");
      }
      const h = s
        ? s_get(e, t)
        : i(arguments_length > 2 ? arguments[2] : undefined)(t, e);
      s_set(e, t, r(h, t, e));
      return e;
    },
  },
);
