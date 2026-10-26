import n from "./module-r9.js";
import { f } from "./module-t.js";
import i from "./module-w.js";
export default n
  ? function (t, r, e) {
      return f(t, r, i(1, e));
    }
  : function (t, r, e) {
      t[r] = e;
      return t;
    };
