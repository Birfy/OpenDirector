import n from "./module-WG_2_7.js";
import o from "./module-M_2_7.js";
import i from "./module-CP_7.js";
import a from "./module-aq_7.js";
import s from "./module-F4_8.js";
import u from "./module-wz_8.js";
import c from "./module-Qn_8.js";
import f from "./module-se_8.js";
import l from "./module-jOn_7.js";
import _h from "./module-vB_9.js";
import v from "./module-Ke_7.js";
const _h_aTypedArrayConstructor = _h.aTypedArrayConstructor;
export default function (r) {
  let t;
  let e;
  let p;
  let d;
  let g;
  let y;
  let m;
  let b;
  const A = i(this);
  let w = a(r);
  const arguments_length = arguments.length;
  let E = arguments_length > 1 ? arguments[1] : undefined;
  const S = E !== undefined;
  const O = c(w);
  if (O && !f(O)) {
    b = (m = u(w, O)).next;
    for (w = []; !(y = o(b, m)).done;) {
      w.push(y.value);
    }
  }
  if (S && arguments_length > 2) {
    E = n(E, arguments[2]);
  }
  e = s(w);
  d = l((p = new (_h_aTypedArrayConstructor(A))(e)));
  for (t = 0; e > t; t++) {
    g = S ? E(w[t], t) : w[t];
    p[t] = d ? v(g) : +g;
  }
  return p;
}
