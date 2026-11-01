import n from "./module-D_2_9.js";
import o from "./module-Y_10.js";
import i from "./module-aq_9.js";
import a from "./module-uW_10.js";
import s from "./module-vb_2_9.js";
const u = a("IE_PROTO");
const Object_prototype = Object.prototype;
export default s
  ? Object.getPrototypeOf
  : function (t) {
      const e = i(t);
      if (n(e, u)) {
        return e[u];
      }
      const e_constructor = e.constructor;
      if (o(e_constructor) && e instanceof e_constructor) {
        return e_constructor.prototype;
      }
      if (e instanceof Object) {
        return Object_prototype;
      }
      return null;
    };
