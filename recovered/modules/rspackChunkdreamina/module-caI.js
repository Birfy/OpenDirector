import n from "g";
import i from "l";
import a from "Vw";
import o from "Y";
import s from "lY";
const c = function () {
  const t = o("Object", "freeze");
  if (t) {
    return t(s(null));
  }
  return s(null);
};
n(
  {
    global: true,
    forced: true,
  },
  {
    compositeKey: function () {
      return i(a, Object, arguments).get("object", c);
    },
  },
);
