import n from "./module-WG_2_6.js";
import o from "./module-M_2_6.js";
import a from "./module-CP_6.js";
import i from "./module-aq_6.js";
import s from "./module-F4_7.js";
import c from "./module-wz_7.js";
import u from "./module-Qn_7.js";
import f from "./module-se_7.js";
import l from "./module-jOn_6.js";
import _h from "./module-vB_8.js";
import p from "./module-Ke_6.js";
const _h_aTypedArrayConstructor = _h.aTypedArrayConstructor;
export default function (t) {
  let r;
  let e;
  let v;
  let d;
  let g;
  let y;
  let m;
  let b;
  const A = a(this);
  let w = i(t);
  const arguments_length = arguments.length;
  let E = arguments_length > 1 ? arguments[1] : undefined;
  const S = E !== undefined;
  const O = u(w);
  if (O && !f(O)) {
    b = (m = c(w, O)).next;
    for (w = []; !(y = o(b, m)).done;) {
      w.push(y.value);
    }
  }
  if (S && arguments_length > 2) {
    E = n(E, arguments[2]);
  }
  e = s(w);
  d = l((v = new (_h_aTypedArrayConstructor(A))(e)));
  for (r = 0; e > r; r++) {
    g = S ? E(w[r], r) : w[r];
    v[r] = d ? p(g) : +g;
  }
  return v;
}
