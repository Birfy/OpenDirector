import n from "./module-A.js";
import o from "./module-Xy_2.js";
import i from "./module-An.js";
import a from "./module-YR.js";
import s from "./module-Za.js";
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
