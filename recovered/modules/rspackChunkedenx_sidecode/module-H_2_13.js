import n from "./module-D_2_13.js";
import o from "./module-Y_14.js";
import i from "./module-aq_13.js";
import a from "./module-uW_14.js";
import s from "./module-vb_2_13.js";
const u = a("IE_PROTO");
const Object_prototype = Object.prototype;
export default s
  ? Object.getPrototypeOf
  : function (r) {
      const t = i(r);
      if (n(t, u)) {
        return t[u];
      }
      const t_constructor = t.constructor;
      if (o(t_constructor) && t instanceof t_constructor) {
        return t_constructor.prototype;
      }
      if (t instanceof Object) {
        return Object_prototype;
      }
      return null;
    };
