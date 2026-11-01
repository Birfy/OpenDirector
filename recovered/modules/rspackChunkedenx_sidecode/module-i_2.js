import n from "./module-YR.js";
import o from "./module-Y.js";
import i from "./module-e.js";
import a from "./module-x_2.js";
export default a
  ? function (t) {
      return typeof t === "symbol";
    }
  : function (t) {
      const r = n("Symbol");
      return o(r) && i(r.prototype, Object(t));
    };
