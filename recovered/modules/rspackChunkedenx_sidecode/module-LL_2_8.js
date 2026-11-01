import n from "./module-A_9.js";
import i from "./module-Xy_2_8.js";
import o from "./module-An_9.js";
import s from "./module-YR_8.js";
import a from "./module-Za_8.js";
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
