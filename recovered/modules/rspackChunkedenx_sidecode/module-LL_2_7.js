import n from "./module-A_8.js";
import o from "./module-Xy_2_7.js";
import i from "./module-An_8.js";
import a from "./module-YR_7.js";
import s from "./module-Za_7.js";
const c = function () {
  const r = a("Object", "freeze");
  if (r) {
    return r(s(null));
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
