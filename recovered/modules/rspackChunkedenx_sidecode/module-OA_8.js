import n from "./module-YR_8.js";
import i from "./module-Y_9.js";
import o from "./module-ec_8.js";
import s from "./module-y_2_8.js";
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
