import n from "./module-J_22.js";
import i from "./module-X_22.js";
import o from "./module-G_2_21.js";
import s from "./module-pj_22.js";
import a from "./module-In_21.js";
import u from "./module-p2_21.js";
const n_structuredClone = n.structuredClone;
export default !!n_structuredClone &&
  !i(function () {
    if ((a && o > 92) || (u && o > 94) || (s && o > 97)) {
      return false;
    }
    const t = new ArrayBuffer(8);
    const r = n_structuredClone(t, {
      transfer: [t],
    });
    return t.byteLength !== 0 || r.byteLength !== 8;
  });
