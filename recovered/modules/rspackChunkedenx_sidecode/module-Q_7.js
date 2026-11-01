import n from "./module-O9_6.js";
import o from "./module-X_7.js";
import a from "./module-Md_6.js";
const s = n("".split);
export default o(function () {
  return !Object("z").propertyIsEnumerable(0);
})
  ? function (t) {
      if (a(t) === "String") {
        return s(t, "");
      }
      return Object(t);
    }
  : Object;
