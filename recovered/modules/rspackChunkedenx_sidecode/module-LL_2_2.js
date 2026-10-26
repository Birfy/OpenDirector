import n from "./module-A_3.js";
import i from "./module-Xy_2_2.js";
import o from "./module-An_3.js";
import s from "./module-YR_2.js";
import a from "./module-Za_2.js";
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
