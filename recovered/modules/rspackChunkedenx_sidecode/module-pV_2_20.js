import n from "./module-WG_2_20.js";
import o from "./module-M_2_20.js";
import i from "./module-CP_20.js";
import a from "./module-aq_20.js";
import s from "./module-F4_21.js";
import c from "./module-wz_21.js";
import u from "./module-Qn_21.js";
import f from "./module-se_21.js";
import l from "./module-jOn_20.js";
import _h from "./module-vB_22.js";
import v from "./module-Ke_20.js";
const _h_aTypedArrayConstructor = _h.aTypedArrayConstructor;
export default function (t) {
  let r;
  let e;
  let p;
  let d;
  let g;
  let y;
  let m;
  let b;
  const w = i(this);
  let A = a(t);
  const arguments_length = arguments.length;
  let S = arguments_length > 1 ? arguments[1] : undefined;
  const E = S !== undefined;
  const O = u(A);
  if (O && !f(O)) {
    b = (m = c(A, O)).next;
    for (A = []; !(y = o(b, m)).done;) {
      A.push(y.value);
    }
  }
  if (E && arguments_length > 2) {
    S = n(S, arguments[2]);
  }
  e = s(A);
  d = l((p = new (_h_aTypedArrayConstructor(w))(e)));
  for (r = 0; e > r; r++) {
    g = E ? S(A[r], r) : A[r];
    p[r] = d ? v(g) : +g;
  }
  return p;
}
