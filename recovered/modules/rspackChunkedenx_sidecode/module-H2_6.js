import n from "./module-J_7.js";
import o from "./module-X_7.js";
import a from "./module-G_2_6.js";
import i from "./module-pj_7.js";
import s from "./module-In_6.js";
import c from "./module-p2_6.js";
const n_structuredClone = n.structuredClone;
export default !!n_structuredClone &&
  !o(function () {
    if ((s && a > 92) || (c && a > 94) || (i && a > 97)) {
      return false;
    }
    const t = new ArrayBuffer(8);
    const r = n_structuredClone(t, {
      transfer: [t],
    });
    return t.byteLength !== 0 || r.byteLength !== 8;
  });
