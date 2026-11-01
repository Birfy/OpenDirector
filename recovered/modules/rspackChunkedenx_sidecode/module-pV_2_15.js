import n from "./module-WG_2_15.js";
import o from "./module-M_2_15.js";
import i from "./module-CP_15.js";
import a from "./module-aq_15.js";
import s from "./module-F4_16.js";
import u from "./module-wz_16.js";
import c from "./module-Qn_16.js";
import f from "./module-se_16.js";
import h from "./module-jOn_15.js";
import _l from "./module-vB_17.js";
import v from "./module-Ke_15.js";
const _l_aTypedArrayConstructor = _l.aTypedArrayConstructor;
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
  d = h((p = new (_l_aTypedArrayConstructor(A))(e)));
  for (t = 0; e > t; t++) {
    g = E ? S(x[t], t) : x[t];
    p[t] = d ? v(g) : +g;
  }
  return p;
}
