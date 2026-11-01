import n from "./module-A_17.js";
import o from "./module-Xy_2_16.js";
import i from "./module-An_17.js";
import a from "./module-YR_16.js";
import s from "./module-Za_16.js";
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
