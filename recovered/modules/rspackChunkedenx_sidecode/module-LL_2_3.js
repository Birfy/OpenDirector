import n from "./module-A_4.js";
import i from "./module-Xy_2_3.js";
import o from "./module-An_4.js";
import s from "./module-YR_3.js";
import a from "./module-Za_3.js";
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
