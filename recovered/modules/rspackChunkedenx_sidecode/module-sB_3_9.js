import n from "./module-A_10.js";
import o from "./module-vo_9.js";
import i from "./module-ot_10.js";
import a from "./module-e7_9.js";
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
    update: function (t, e) {
      const r = i(this);
      const arguments_length = arguments.length;
      o(e);
      const a = a_has(r, t);
      if (!a && arguments_length < 3) {
        throw TypeError("Updating absent value");
      }
      const l = a
        ? a_get(r, t)
        : o(arguments_length > 2 ? arguments[2] : undefined)(t, r);
      a_set(r, t, e(l, t, r));
      return r;
    },
  },
);
