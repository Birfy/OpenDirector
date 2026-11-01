import n from "./module-S9_16.js";
import o from "./module-D_2_16.js";
import i from "./module-Mi_16.js";
import a from "./module-lN_16.js";
import s from "./module-at_16.js";
const u = a("iterator");
export default function (t) {
  if (i(t)) {
    return false;
  }
  const r = Object(t);
  return r[u] !== undefined || "@@iterator" in r || o(s, n(r));
}
