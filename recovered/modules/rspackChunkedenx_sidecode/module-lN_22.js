import n from "./module-J_23.js";
import i from "./module-K_23.js";
import o from "./module-D_2_22.js";
import s from "./module-o_22.js";
import a from "./module-eZ_22.js";
import u from "./module-x_2_22.js";
const n_Symbol = n.Symbol;
const f = i("wks");
const h = u
  ? n_Symbol.for || n_Symbol
  : (n_Symbol && n_Symbol.withoutSetter) || s;
export default function (t) {
  if (!o(f, t)) {
    f[t] = a && o(n_Symbol, t) ? n_Symbol[t] : h("Symbol." + t);
  }
  return f[t];
}
