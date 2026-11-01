import $ from "./module-D_2_12.js";
import tt from "./module-Y_13.js";
import te from "./module-aq_12.js";
import tr from "./module-uW_13.js";
import tn from "./module-vb_2_12.js";
const ti = tr("IE_PROTO");
const Object_prototype = Object.prototype;
export default tn
  ? Object.getPrototypeOf
  : function (J) {
      const Z = te(J);
      if ($(Z, ti)) {
        return Z[ti];
      }
      const Z_constructor = Z.constructor;
      if (tt(Z_constructor) && Z instanceof Z_constructor) {
        return Z_constructor.prototype;
      }
      if (Z instanceof Object) {
        return Object_prototype;
      }
      return null;
    };
