import n from "./module-YR_9.js";
import o from "./module-Y_10.js";
import i from "./module-ec_9.js";
import a from "./module-y_2_9.js";
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
