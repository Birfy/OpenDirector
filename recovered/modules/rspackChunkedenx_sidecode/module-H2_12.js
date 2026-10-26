import $ from "./module-J_13.js";
import tt from "./module-X_13.js";
import te from "./module-G_2_12.js";
import tr from "./module-pj_13.js";
import tn from "./module-In_12.js";
import ti from "./module-p2_12.js";
const $_structuredClone = $.structuredClone;
export default !!$_structuredClone &&
  !tt(function () {
    if ((tn && te > 92) || (ti && te > 94) || (tr && te > 97)) {
      return false;
    }
    const J = new ArrayBuffer(8);
    const Z = $_structuredClone(J, {
      transfer: [J],
    });
    return J.byteLength !== 0 || Z.byteLength !== 8;
  });
