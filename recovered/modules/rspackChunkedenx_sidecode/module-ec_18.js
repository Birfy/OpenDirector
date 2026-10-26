import n from "./module-S9_18.js";
import o from "./module-D_2_18.js";
import i from "./module-Mi_18.js";
import a from "./module-lN_18.js";
import s from "./module-at_18.js";
const u = a("iterator");
export default function (r) {
  if (i(r)) {
    return false;
  }
  const t = Object(r);
  return t[u] !== undefined || "@@iterator" in t || o(s, n(t));
}
