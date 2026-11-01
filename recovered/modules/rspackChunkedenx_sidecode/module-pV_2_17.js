import n from "./module-WG_2_17.js";
import o from "./module-M_2_17.js";
import i from "./module-CP_17.js";
import a from "./module-aq_17.js";
import s from "./module-F4_18.js";
import u from "./module-wz_18.js";
import c from "./module-Qn_18.js";
import f from "./module-se_18.js";
import h from "./module-jOn_17.js";
import _l from "./module-vB_19.js";
import v from "./module-Ke_17.js";
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
