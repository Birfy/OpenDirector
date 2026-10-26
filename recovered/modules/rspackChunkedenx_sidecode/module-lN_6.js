import n from "./module-J_7.js";
import o from "./module-K_7.js";
import a from "./module-D_2_6.js";
import i from "./module-o_6.js";
import s from "./module-eZ_6.js";
import c from "./module-x_2_6.js";
const n_Symbol = n.Symbol;
const f = o("wks");
const l = c
  ? n_Symbol.for || n_Symbol
  : (n_Symbol && n_Symbol.withoutSetter) || i;
export default function (t) {
  if (!a(f, t)) {
    f[t] = s && a(n_Symbol, t) ? n_Symbol[t] : l("Symbol." + t);
  }
  return f[t];
}
