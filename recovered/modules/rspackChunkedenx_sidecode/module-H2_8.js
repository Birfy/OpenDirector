import n from "./module-J_9.js";
import i from "./module-X_9.js";
import o from "./module-G_2_8.js";
import s from "./module-pj_9.js";
import a from "./module-In_8.js";
import u from "./module-p2_8.js";
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
