import n from "./module-WG_2_9.js";
import o from "./module-M_2_9.js";
import i from "./module-CP_9.js";
import a from "./module-aq_9.js";
import s from "./module-F4_10.js";
import u from "./module-wz_10.js";
import c from "./module-Qn_10.js";
import f from "./module-se_10.js";
import l from "./module-jOn_9.js";
import _h from "./module-vB_11.js";
import v from "./module-Ke_9.js";
const _h_aTypedArrayConstructor = _h.aTypedArrayConstructor;
export default function (t) {
  let e;
  let r;
  let d;
  let p;
  let g;
  let y;
  let m;
  let b;
  const w = i(this);
  let A = a(t);
  const arguments_length = arguments.length;
  let E = arguments_length > 1 ? arguments[1] : undefined;
  const S = E !== undefined;
  const O = c(A);
  if (O && !f(O)) {
    b = (m = u(A, O)).next;
    for (A = []; !(y = o(b, m)).done;) {
      A.push(y.value);
    }
  }
  if (S && arguments_length > 2) {
    E = n(E, arguments[2]);
  }
  r = s(A);
  p = l((d = new (_h_aTypedArrayConstructor(w))(r)));
  for (e = 0; r > e; e++) {
    g = S ? E(A[e], e) : A[e];
    d[e] = p ? v(g) : +g;
  }
  return d;
}
