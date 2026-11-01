import n from "./module-A_12.js";
import o from "./module-vo_11.js";
import i from "./module-ot_12.js";
import a from "./module-e7_11.js";
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
    update: function (r, t) {
      const e = i(this);
      const arguments_length = arguments.length;
      o(t);
      const a = a_has(e, r);
      if (!a && arguments_length < 3) {
        throw TypeError("Updating absent value");
      }
      const h = a
        ? a_get(e, r)
        : o(arguments_length > 2 ? arguments[2] : undefined)(r, e);
      a_set(e, r, t(h, r, e));
      return e;
    },
  },
);
