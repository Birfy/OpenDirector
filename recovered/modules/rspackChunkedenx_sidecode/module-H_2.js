import n from "./module-D_2.js";
import o from "./module-Y.js";
import i from "./module-aq.js";
import a from "./module-uW.js";
import s from "./module-vb_2.js";
const u = a("IE_PROTO");
const Object_prototype = Object.prototype;
export default s
  ? Object.getPrototypeOf
  : function (t) {
      const r = i(t);
      if (n(r, u)) {
        return r[u];
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
