import n from "./module-D_2_2.js";
import i from "./module-Y_3.js";
import o from "./module-aq_2.js";
import s from "./module-uW_3.js";
import a from "./module-vb_2_2.js";
const u = s("IE_PROTO");
const Object_prototype = Object.prototype;
export default a
  ? Object.getPrototypeOf
  : function (t) {
      const r = o(t);
      if (n(r, u)) {
        return r[u];
      }
      const r_constructor = r.constructor;
      if (i(r_constructor) && r instanceof r_constructor) {
        return r_constructor.prototype;
      }
      if (r instanceof Object) {
        return Object_prototype;
      }
      return null;
    };
