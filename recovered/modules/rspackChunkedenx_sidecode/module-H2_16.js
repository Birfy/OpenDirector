import n from "./module-J_17.js";
import o from "./module-X_17.js";
import i from "./module-G_2_16.js";
import a from "./module-pj_17.js";
import s from "./module-In_16.js";
import u from "./module-p2_16.js";
const n_structuredClone = n.structuredClone;
export default !!n_structuredClone &&
  !o(function () {
    if ((s && i > 92) || (u && i > 94) || (a && i > 97)) {
      return false;
    }
    const t = new ArrayBuffer(8);
    const r = n_structuredClone(t, {
      transfer: [t],
    });
    return t.byteLength !== 0 || r.byteLength !== 8;
  });
