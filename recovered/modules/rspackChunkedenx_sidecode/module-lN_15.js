import n from "./module-J_16.js";
import o from "./module-K_16.js";
import i from "./module-D_2_15.js";
import a from "./module-o_15.js";
import s from "./module-eZ_15.js";
import u from "./module-x_2_15.js";
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
