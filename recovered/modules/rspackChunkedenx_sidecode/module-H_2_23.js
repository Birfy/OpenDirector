import n from "./module-D_2_23.js";
import o from "./module-Y_24.js";
import i from "./module-aq_23.js";
import a from "./module-uW_24.js";
import s from "./module-vb_2_23.js";
const c = a("IE_PROTO");
const Object_prototype = Object.prototype;
export default s
  ? Object.getPrototypeOf
  : function (t) {
      const r = i(t);
      if (n(r, c)) {
        return r[c];
      }
      const r_constructor = r.constructor;
      if (o(r_constructor) && r instanceof r_constructor) {
        return r_constructor.prototype;
      }
      if (r instanceof Object) {
        return Object_prototype;
      }
      return null;
    };
