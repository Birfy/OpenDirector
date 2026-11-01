import n from "./module-YR.js";
import o from "./module-Y.js";
import i from "./module-ec.js";
import a from "./module-y_2.js";
const s = n("Set");
export default function (t) {
  if (a(t) && typeof t.size === "number" && o(t.has) && o(t.keys)) {
    return t;
  }
  if (i(t)) {
    return new s(t);
  }
  return t;
}
