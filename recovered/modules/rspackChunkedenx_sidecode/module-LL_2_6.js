import n from "./module-A_7.js";
import o from "./module-Xy_2_6.js";
import a from "./module-An_7.js";
import i from "./module-YR_6.js";
import s from "./module-Za_6.js";
const u = function () {
  const t = i("Object", "freeze");
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
      return o(a, Object, arguments).get("object", u);
    },
  },
);
