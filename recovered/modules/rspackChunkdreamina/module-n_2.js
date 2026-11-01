import n from "./module-Y.js";
import o from "./module-r.js";
import i from "./module-V8.js";
import a from "./module-d_2.js";
export default a
  ? function (e) {
      return typeof e === "symbol";
    }
  : function (e) {
      const t = n("Symbol");
      return o(t) && i(t.prototype, Object(e));
    };
