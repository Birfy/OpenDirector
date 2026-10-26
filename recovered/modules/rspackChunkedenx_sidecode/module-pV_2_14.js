import n from "./module-WG_2_14.js";
import o from "./module-M_2_14.js";
import i from "./module-CP_14.js";
import a from "./module-aq_14.js";
import s from "./module-F4_15.js";
import c from "./module-wz_15.js";
import u from "./module-Qn_15.js";
import f from "./module-se_15.js";
import l from "./module-jOn_14.js";
import _h from "./module-vB_16.js";
import v from "./module-Ke_14.js";
const _h_aTypedArrayConstructor = _h.aTypedArrayConstructor;
export default function (t) {
  let r;
  let e;
  let p;
  let d;
  let g;
  let y;
  let b;
  let m;
  const A = i(this);
  let x = a(t);
  const arguments_length = arguments.length;
  let S = arguments_length > 1 ? arguments[1] : undefined;
  const E = S !== undefined;
  const O = u(x);
  if (O && !f(O)) {
    m = (b = c(x, O)).next;
    for (x = []; !(y = o(m, b)).done;) {
      x.push(y.value);
    }
  }
  if (E && arguments_length > 2) {
    S = n(S, arguments[2]);
  }
  e = s(x);
  d = l((p = new (_h_aTypedArrayConstructor(A))(e)));
  for (r = 0; e > r; r++) {
    g = E ? S(x[r], r) : x[r];
    p[r] = d ? v(g) : +g;
  }
  return p;
}
