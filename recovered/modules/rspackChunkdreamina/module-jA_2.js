import n from "./module-h.js";
import o from "./module-r.js";
import i from "./module-O_2.js";
import a from "./module-s.js";
import s from "./module-BM_2.js";
const u = a("IE_PROTO");
const Object_prototype = Object.prototype;
export default s
  ? Object.getPrototypeOf
  : function (e) {
      const t = i(e);
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
