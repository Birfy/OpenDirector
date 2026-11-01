import n from "./module-A_7.js";
import o from "./module-vo_6.js";
import a from "./module-ot_7.js";
import i from "./module-e7_6.js";
const i_get = i.get;
const i_has = i.has;
const i_set = i.set;
n(
  {
    target: "Map",
    proto: true,
    real: true,
    forced: true,
  },
  {
    update: function (t, r) {
      const e = a(this);
      const arguments_length = arguments.length;
      o(r);
      const i = i_has(e, t);
      if (!i && arguments_length < 3) {
        throw TypeError("Updating absent value");
      }
      const l = i
        ? i_get(e, t)
        : o(arguments_length > 2 ? arguments[2] : undefined)(t, e);
      i_set(e, t, r(l, t, e));
      return e;
    },
  },
);
