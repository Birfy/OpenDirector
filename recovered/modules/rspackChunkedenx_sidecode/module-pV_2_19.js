import n from "./module-WG_2_19.js";
import o from "./module-M_2_19.js";
import i from "./module-CP_19.js";
import a from "./module-aq_19.js";
import s from "./module-F4_20.js";
import u from "./module-wz_20.js";
import c from "./module-Qn_20.js";
import f from "./module-se_20.js";
import l from "./module-jOn_19.js";
import _h from "./module-vB_21.js";
import v from "./module-Ke_19.js";
const _h_aTypedArrayConstructor = _h.aTypedArrayConstructor;
export default function (r) {
  let t;
  let e;
  let p;
  let d;
  let g;
  let y;
  let b;
  let m;
  const A = i(this);
  let x = a(r);
  const arguments_length = arguments.length;
  let S = arguments_length > 1 ? arguments[1] : undefined;
  const E = S !== undefined;
  const O = c(x);
  if (O && !f(O)) {
    m = (b = u(x, O)).next;
    for (x = []; !(y = o(m, b)).done;) {
      x.push(y.value);
    }
  }
  if (E && arguments_length > 2) {
    S = n(S, arguments[2]);
  }
  e = s(x);
  d = l((p = new (_h_aTypedArrayConstructor(A))(e)));
  for (t = 0; e > t; t++) {
    g = E ? S(x[t], t) : x[t];
    p[t] = d ? v(g) : +g;
  }
  return p;
}
