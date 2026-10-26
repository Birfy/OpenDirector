import n from "./module-A_16.js";
import o from "./module-Xy_2_15.js";
import i from "./module-An_16.js";
import a from "./module-YR_15.js";
import s from "./module-Za_15.js";
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
