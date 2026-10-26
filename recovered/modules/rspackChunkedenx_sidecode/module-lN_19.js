import n from "./module-J_20.js";
import o from "./module-K_20.js";
import i from "./module-D_2_19.js";
import a from "./module-o_19.js";
import s from "./module-eZ_19.js";
import u from "./module-x_2_19.js";
const n_Symbol = n.Symbol;
const f = o("wks");
const l = u
  ? n_Symbol.for || n_Symbol
  : (n_Symbol && n_Symbol.withoutSetter) || a;
export default function (r) {
  if (!i(f, r)) {
    f[r] = s && i(n_Symbol, r) ? n_Symbol[r] : l("Symbol." + r);
  }
  return f[r];
}
