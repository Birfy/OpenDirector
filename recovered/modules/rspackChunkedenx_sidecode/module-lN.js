import n from "./module-J.js";
import o from "./module-K.js";
import i from "./module-D_2.js";
import a from "./module-o.js";
import s from "./module-eZ.js";
import u from "./module-x_2.js";
const n_Symbol = n.Symbol;
const f = o("wks");
const h = u
  ? n_Symbol.for || n_Symbol
  : (n_Symbol && n_Symbol.withoutSetter) || a;
export default function (t) {
  if (!i(f, t)) {
    f[t] = s && i(n_Symbol, t) ? n_Symbol[t] : h("Symbol." + t);
  }
  return f[t];
}
