import n from "./module-J_11.js";
import o from "./module-K_11.js";
import i from "./module-D_2_10.js";
import a from "./module-o_10.js";
import s from "./module-eZ_10.js";
import u from "./module-x_2_10.js";
const n_Symbol = n.Symbol;
const f = o("wks");
const l = u
  ? n_Symbol.for || n_Symbol
  : (n_Symbol && n_Symbol.withoutSetter) || a;
export default function (t) {
  if (!i(f, t)) {
    f[t] = s && i(n_Symbol, t) ? n_Symbol[t] : l("Symbol." + t);
  }
  return f[t];
}
