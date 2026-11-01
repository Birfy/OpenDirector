import n from "./module-S9_10.js";
import o from "./module-D_2_10.js";
import i from "./module-Mi_10.js";
import a from "./module-lN_10.js";
import s from "./module-at_10.js";
const u = a("iterator");
export default function (t) {
  if (i(t)) {
    return false;
  }
  const r = Object(t);
  return r[u] !== undefined || "@@iterator" in r || o(s, n(r));
}
