import n from "./module-J_21.js";
import o from "./module-X_21.js";
import i from "./module-G_2_20.js";
import a from "./module-pj_21.js";
import s from "./module-In_20.js";
import c from "./module-p2_20.js";
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
