import n from "./module-S9_20.js";
import o from "./module-D_2_20.js";
import i from "./module-Mi_20.js";
import a from "./module-lN_20.js";
import s from "./module-at_20.js";
const c = a("iterator");
export default function (t) {
  if (i(t)) {
    return false;
  }
  const r = Object(t);
  return r[c] !== undefined || "@@iterator" in r || o(s, n(r));
}
