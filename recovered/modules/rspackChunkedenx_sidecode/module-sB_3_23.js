import n from "./module-A_24.js";
import o from "./module-vo_23.js";
import i from "./module-ot_24.js";
import a from "./module-e7_23.js";
const a_get = a.get;
const a_has = a.has;
const a_set = a.set;
n(
  {
    target: "Map",
    proto: true,
    real: true,
    forced: true,
  },
  {
    update: function (t, r) {
      const e = i(this);
      const arguments_length = arguments.length;
      o(r);
      const a = a_has(e, t);
      if (!a && arguments_length < 3) {
        throw TypeError("Updating absent value");
      }
      const l = a
        ? a_get(e, t)
        : o(arguments_length > 2 ? arguments[2] : undefined)(t, e);
      a_set(e, t, r(l, t, e));
      return e;
    },
  },
);
