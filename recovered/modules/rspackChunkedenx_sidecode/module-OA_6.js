import n from "./module-YR_6.js";
import o from "./module-Y_7.js";
import a from "./module-ec_6.js";
import i from "./module-y_2_6.js";
const s = n("Set");
export default function (t) {
  if (i(t) && typeof t.size === "number" && o(t.has) && o(t.keys)) {
    return t;
  }
  if (a(t)) {
    return new s(t);
  }
  return t;
}
