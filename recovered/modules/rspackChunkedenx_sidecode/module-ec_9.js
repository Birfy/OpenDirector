import n from "./module-S9_9.js";
import o from "./module-D_2_9.js";
import i from "./module-Mi_9.js";
import a from "./module-lN_9.js";
import s from "./module-at_9.js";
const u = a("iterator");
export default function (t) {
  if (i(t)) {
    return false;
  }
  const e = Object(t);
  return e[u] !== undefined || "@@iterator" in e || o(s, n(e));
}
