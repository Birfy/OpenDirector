import n from "./module-S9_5.js";
import i from "./module-D_2_5.js";
import o from "./module-Mi_5.js";
import s from "./module-lN_5.js";
import a from "./module-at_5.js";
const u = s("iterator");
export default function (t) {
  if (o(t)) {
    return false;
  }
  const r = Object(t);
  return r[u] !== undefined || "@@iterator" in r || i(a, n(r));
}
