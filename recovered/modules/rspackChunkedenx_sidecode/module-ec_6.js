import n from "./module-S9_6.js";
import o from "./module-D_2_6.js";
import a from "./module-Mi_6.js";
import i from "./module-lN_6.js";
import s from "./module-at_6.js";
const c = i("iterator");
export default function (t) {
  if (a(t)) {
    return false;
  }
  const r = Object(t);
  return r[c] !== undefined || "@@iterator" in r || o(s, n(r));
}
