import n from "./module-Y.js";
import o from "./module-r.js";
import i from "./module-Xpp.js";
import a from "./module-N.js";
const s = n("Set");
export default function (e) {
  if (a(e) && typeof e.size === "number" && o(e.has) && o(e.keys)) {
    return e;
  }
  if (i(e)) {
    return new s(e);
  }
  return e;
}
