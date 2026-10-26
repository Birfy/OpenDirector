import n from "./module-A_22.js";
import i from "./module-Xy_2_21.js";
import o from "./module-An_22.js";
import s from "./module-YR_21.js";
import a from "./module-Za_21.js";
const c = function () {
  const t = s("Object", "freeze");
  if (t) {
    return t(a(null));
  }
  return a(null);
};
n(
  {
    global: true,
    forced: true,
  },
  {
    compositeKey: function () {
      return i(o, Object, arguments).get("object", c);
    },
  },
);
