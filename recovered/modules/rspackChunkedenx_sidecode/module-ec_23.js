import n from "./module-S9_23.js";
import o from "./module-D_2_23.js";
import i from "./module-Mi_23.js";
import a from "./module-lN_23.js";
import s from "./module-at_23.js";
const c = a("iterator");
export default function (t) {
  if (i(t)) {
    return false;
  }
  const r = Object(t);
  return r[c] !== undefined || "@@iterator" in r || o(s, n(r));
}
