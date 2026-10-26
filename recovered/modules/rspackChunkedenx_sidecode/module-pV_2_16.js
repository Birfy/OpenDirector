import n from "./module-WG_2_16.js";
import o from "./module-M_2_16.js";
import i from "./module-CP_16.js";
import a from "./module-aq_16.js";
import s from "./module-F4_17.js";
import u from "./module-wz_17.js";
import c from "./module-Qn_17.js";
import f from "./module-se_17.js";
import l from "./module-jOn_16.js";
import _h from "./module-vB_18.js";
import v from "./module-Ke_16.js";
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
  const A = i(this);
  let x = a(t);
  const arguments_length = arguments.length;
  let S = arguments_length > 1 ? arguments[1] : undefined;
  const E = S !== undefined;
  const O = c(x);
  if (O && !f(O)) {
    b = (m = u(x, O)).next;
    for (x = []; !(y = o(b, m)).done;) {
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
