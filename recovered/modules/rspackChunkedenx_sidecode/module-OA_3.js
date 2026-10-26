import n from "./module-YR_3.js";
import i from "./module-Y_4.js";
import o from "./module-ec_3.js";
import s from "./module-y_2_3.js";
const a = n("Set");
export default function (t) {
  if (s(t) && typeof t.size === "number" && i(t.has) && i(t.keys)) {
    return t;
  }
  if (o(t)) {
    return new a(t);
  }
  return t;
}
