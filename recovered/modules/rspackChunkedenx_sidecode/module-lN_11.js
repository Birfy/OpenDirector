import n from "./module-J_12.js";
import o from "./module-K_12.js";
import i from "./module-D_2_11.js";
import a from "./module-o_11.js";
import s from "./module-eZ_11.js";
import u from "./module-x_2_11.js";
const n_Symbol = n.Symbol;
const f = o("wks");
const h = u
  ? n_Symbol.for || n_Symbol
  : (n_Symbol && n_Symbol.withoutSetter) || a;
export default function (r) {
  if (!i(f, r)) {
    f[r] = s && i(n_Symbol, r) ? n_Symbol[r] : h("Symbol." + r);
  }
  return f[r];
}
