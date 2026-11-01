import n from "./module-p3.js";
import o from "./module-IF_2.js";
import i from "./module-ju_2.js";
import a from "./module-UZ_3.js";
export default function (e, t) {
  if (!(t && typeof e === "string")) {
    o(e);
  }
  const r = a(e);
  return i(o(r !== undefined ? n(r, e) : e));
}
