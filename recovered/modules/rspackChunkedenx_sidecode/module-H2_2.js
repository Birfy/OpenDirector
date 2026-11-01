import n from "./module-J_3.js";
import i from "./module-X_3.js";
import o from "./module-G_2_2.js";
import s from "./module-pj_3.js";
import a from "./module-In_2.js";
import u from "./module-p2_2.js";
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
