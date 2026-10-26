import n from "./module-J_14.js";
import o from "./module-K_14.js";
import i from "./module-D_2_13.js";
import a from "./module-o_13.js";
import s from "./module-eZ_13.js";
import u from "./module-x_2_13.js";
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
