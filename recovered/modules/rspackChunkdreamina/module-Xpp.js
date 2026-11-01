import n from "./module-xE_3.js";
import o from "./module-h.js";
import i from "./module-D.js";
import a from "./module-Nt_3.js";
import s from "./module-uK_4.js";
const u = a("iterator");
export default function (e) {
  if (i(e)) {
    return false;
  }
  const t = Object(e);
  return t[u] !== undefined || "@@iterator" in t || o(s, n(t));
}
