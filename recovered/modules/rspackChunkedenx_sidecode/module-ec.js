import n from "./module-S9.js";
import o from "./module-D_2.js";
import i from "./module-Mi.js";
import a from "./module-lN.js";
import s from "./module-at.js";
const u = a("iterator");
export default function (t) {
  if (i(t)) {
    return false;
  }
  const r = Object(t);
  return r[u] !== undefined || "@@iterator" in r || o(s, n(r));
}
