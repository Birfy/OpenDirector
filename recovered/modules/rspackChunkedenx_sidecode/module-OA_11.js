import n from "./module-YR_11.js";
import o from "./module-Y_12.js";
import i from "./module-ec_11.js";
import a from "./module-y_2_11.js";
const s = n("Set");
export default function (r) {
  if (a(r) && typeof r.size === "number" && o(r.has) && o(r.keys)) {
    return r;
  }
  if (i(r)) {
    return new s(r);
  }
  return r;
}
