import n from "./module-A_14.js";
import o from "./module-Xy_2_13.js";
import i from "./module-An_14.js";
import a from "./module-YR_13.js";
import s from "./module-Za_13.js";
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
