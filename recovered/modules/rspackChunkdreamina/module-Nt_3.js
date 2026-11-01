import n from "./module-u.js";
import o from "./module-Mz_2.js";
import i from "./module-h.js";
import a from "./module-I_2.js";
import s from "./module-rz_2.js";
import u from "./module-d_2.js";
const n_Symbol = n.Symbol;
const f = o("wks");
const l = u
  ? n_Symbol.for || n_Symbol
  : (n_Symbol && n_Symbol.withoutSetter) || a;
export default function (e) {
  if (!i(f, e)) {
    f[e] = s && i(n_Symbol, e) ? n_Symbol[e] : l("Symbol." + e);
  }
  return f[e];
}
