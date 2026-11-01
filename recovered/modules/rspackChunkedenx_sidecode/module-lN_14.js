import n from "./module-J_15.js";
import o from "./module-K_15.js";
import i from "./module-D_2_14.js";
import a from "./module-o_14.js";
import s from "./module-eZ_14.js";
import c from "./module-x_2_14.js";
const n_Symbol = n.Symbol;
const f = o("wks");
const l = c
  ? n_Symbol.for || n_Symbol
  : (n_Symbol && n_Symbol.withoutSetter) || a;
export default function (t) {
  if (!i(f, t)) {
    f[t] = s && i(n_Symbol, t) ? n_Symbol[t] : l("Symbol." + t);
  }
  return f[t];
}
