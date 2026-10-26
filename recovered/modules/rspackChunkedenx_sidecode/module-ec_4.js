import n from "./module-S9_4.js";
import i from "./module-D_2_4.js";
import o from "./module-Mi_4.js";
import s from "./module-lN_4.js";
import a from "./module-at_4.js";
const u = s("iterator");
export default function (t) {
  if (o(t)) {
    return false;
  }
  const r = Object(t);
  return r[u] !== undefined || "@@iterator" in r || i(a, n(r));
}
