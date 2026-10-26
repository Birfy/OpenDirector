import n from "./module-YR_16.js";
import o from "./module-Y_17.js";
import i from "./module-ec_16.js";
import a from "./module-y_2_16.js";
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
