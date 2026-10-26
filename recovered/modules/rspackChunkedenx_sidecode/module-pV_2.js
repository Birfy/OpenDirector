import n from "./module-WG_2.js";
import o from "./module-M_2.js";
import i from "./module-CP.js";
import a from "./module-aq.js";
import s from "./module-F4.js";
import u from "./module-wz.js";
import c from "./module-Qn.js";
import f from "./module-se.js";
import h from "./module-jOn.js";
import _l from "./module-vB.js";
import v from "./module-Ke.js";
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
  const A = i(this);
  let x = a(t);
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
  for (r = 0; e > r; r++) {
    g = E ? S(x[r], r) : x[r];
    p[r] = d ? v(g) : +g;
  }
  return p;
}
