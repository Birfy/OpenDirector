import n from "./module-A_23.js";
import i from "./module-Xy_2_22.js";
import o from "./module-An_23.js";
import s from "./module-YR_22.js";
import a from "./module-Za_22.js";
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
