import n from "./module-J_11.js";
import o from "./module-X_11.js";
import i from "./module-G_2_10.js";
import a from "./module-pj_11.js";
import s from "./module-In_10.js";
import u from "./module-p2_10.js";
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
