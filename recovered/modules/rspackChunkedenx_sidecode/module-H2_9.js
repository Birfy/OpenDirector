import n from "./module-J_10.js";
import o from "./module-X_10.js";
import i from "./module-G_2_9.js";
import a from "./module-pj_10.js";
import s from "./module-In_9.js";
import u from "./module-p2_9.js";
const n_structuredClone = n.structuredClone;
export default !!n_structuredClone &&
  !o(function () {
    if ((s && i > 92) || (u && i > 94) || (a && i > 97)) {
      return false;
    }
    const t = new ArrayBuffer(8);
    const e = n_structuredClone(t, {
      transfer: [t],
    });
    return t.byteLength !== 0 || e.byteLength !== 8;
  });
