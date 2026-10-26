import n from "./module-A_15.js";
import o from "./module-Xy_2_14.js";
import i from "./module-An_15.js";
import a from "./module-YR_14.js";
import s from "./module-Za_14.js";
const u = function () {
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
      return o(i, Object, arguments).get("object", u);
    },
  },
);
