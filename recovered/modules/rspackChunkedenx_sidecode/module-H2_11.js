import n from "./module-J_12.js";
import o from "./module-X_12.js";
import i from "./module-G_2_11.js";
import a from "./module-pj_12.js";
import s from "./module-In_11.js";
import u from "./module-p2_11.js";
const n_structuredClone = n.structuredClone;
export default !!n_structuredClone &&
  !o(function () {
    if ((s && i > 92) || (u && i > 94) || (a && i > 97)) {
      return false;
    }
    const r = new ArrayBuffer(8);
    const t = n_structuredClone(r, {
      transfer: [r],
    });
    return r.byteLength !== 0 || t.byteLength !== 8;
  });
