import n from "./module-A_11.js";
import o from "./module-Xy_2_10.js";
import i from "./module-An_11.js";
import a from "./module-YR_10.js";
import s from "./module-Za_10.js";
const c = function () {
  const t = a("Object", "freeze");
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
      return o(i, Object, arguments).get("object", c);
    },
  },
);
