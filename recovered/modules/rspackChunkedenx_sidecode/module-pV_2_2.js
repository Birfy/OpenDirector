import n from "./module-WG_2_2.js";
import i from "./module-M_2_2.js";
import o from "./module-CP_2.js";
import s from "./module-aq_2.js";
import a from "./module-F4_3.js";
import u from "./module-wz_3.js";
import c from "./module-Qn_3.js";
import f from "./module-se_3.js";
import h from "./module-jOn_2.js";
import _l from "./module-vB_4.js";
import v from "./module-Ke_2.js";
const _l_aTypedArrayConstructor = _l.aTypedArrayConstructor;
export default function (t) {
  let r;
  let e;
  let p;
  let d;
  let g;
  let y;
  let b;
  let m;
  const A = o(this);
  let x = s(t);
  const arguments_length = arguments.length;
  let S = arguments_length > 1 ? arguments[1] : undefined;
  const E = S !== undefined;
  const O = c(x);
  if (O && !f(O)) {
    m = (b = u(x, O)).next;
    for (x = []; !(y = i(m, b)).done;) {
      x.push(y.value);
    }
  }
  if (E && arguments_length > 2) {
    S = n(S, arguments[2]);
  }
  e = a(x);
  d = h((p = new (_l_aTypedArrayConstructor(A))(e)));
  for (r = 0; e > r; r++) {
    g = E ? S(x[r], r) : x[r];
    p[r] = d ? v(g) : +g;
  }
  return p;
}
