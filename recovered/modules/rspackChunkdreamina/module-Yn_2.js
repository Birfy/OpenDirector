import n from "./module-u.js";
import o from "./module-VV_4.js";
import i from "./module-z_2.js";
import a from "./module-MF_3.js";
import s from "./module-CG_2.js";
import u from "./module-fd_4.js";
const n_structuredClone = n.structuredClone;
export default !!n_structuredClone &&
  !o(function () {
    if ((s && i > 92) || (u && i > 94) || (a && i > 97)) {
      return false;
    }
    const e = new ArrayBuffer(8);
    const t = n_structuredClone(e, {
      transfer: [e],
    });
    return e.byteLength !== 0 || t.byteLength !== 8;
  });
