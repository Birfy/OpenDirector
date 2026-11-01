import n from "./module-J_24.js";
import o from "./module-X_24.js";
import i from "./module-G_2_23.js";
import a from "./module-pj_24.js";
import s from "./module-In_23.js";
import c from "./module-p2_23.js";
const n_structuredClone = n.structuredClone;
export default !!n_structuredClone &&
  !o(function () {
    if ((s && i > 92) || (c && i > 94) || (a && i > 97)) {
      return false;
    }
    const t = new ArrayBuffer(8);
    const r = n_structuredClone(t, {
      transfer: [t],
    });
    return t.byteLength !== 0 || r.byteLength !== 8;
  });
