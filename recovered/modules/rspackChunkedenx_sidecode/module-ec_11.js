import n from "./module-S9_11.js";
import o from "./module-D_2_11.js";
import i from "./module-Mi_11.js";
import a from "./module-lN_11.js";
import s from "./module-at_11.js";
const u = a("iterator");
export default function (r) {
  if (i(r)) {
    return false;
  }
  const t = Object(r);
  return t[u] !== undefined || "@@iterator" in t || o(s, n(t));
}
