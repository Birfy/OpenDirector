import n from "./module-D_2_17.js";
import o from "./module-Y_18.js";
import i from "./module-aq_17.js";
import a from "./module-uW_18.js";
import s from "./module-vb_2_17.js";
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
