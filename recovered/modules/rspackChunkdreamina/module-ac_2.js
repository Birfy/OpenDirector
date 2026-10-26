import n from "./module-fM_3.js";
import o from "./module-p3.js";
import i from "./module-Z.js";
import a from "./module-O_2.js";
import s from "./module-OG_2.js";
import u from "./module-jn_2.js";
import c from "./module-UZ_3.js";
import f from "./module-Ow_3.js";
import l from "./module-Gn_3.js";
import _p from "./module-ga_2.js";
import h from "./module-wm.js";
const _p_aTypedArrayConstructor = _p.aTypedArrayConstructor;
export default function (e) {
  let t;
  let r;
  let v;
  let d;
  let g;
  let y;
  let m;
  let x;
  const b = i(this);
  let w = a(e);
  const arguments_length = arguments.length;
  let E = arguments_length > 1 ? arguments[1] : undefined;
  const j = E !== undefined;
  const I = c(w);
  if (I && !f(I)) {
    x = (m = u(w, I)).next;
    for (w = []; !(y = o(x, m)).done;) {
      w.push(y.value);
    }
  }
  if (j && arguments_length > 2) {
    E = n(E, arguments[2]);
  }
  r = s(w);
  d = l((v = new (_p_aTypedArrayConstructor(b))(r)));
  for (t = 0; r > t; t++) {
    g = j ? E(w[t], t) : w[t];
    v[t] = d ? h(g) : +g;
  }
  return v;
}
