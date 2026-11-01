import n from "./module-D_2_6.js";
import o from "./module-Y_7.js";
import a from "./module-aq_6.js";
import i from "./module-uW_7.js";
import s from "./module-vb_2_6.js";
const c = i("IE_PROTO");
const Object_prototype = Object.prototype;
export default s
  ? Object.getPrototypeOf
  : function (t) {
      const r = a(t);
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
