import n from "./module-J_6.js";
import i from "./module-K_6.js";
import o from "./module-D_2_5.js";
import s from "./module-o_5.js";
import a from "./module-eZ_5.js";
import u from "./module-x_2_5.js";
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
