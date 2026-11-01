import n from "./module-YR_18.js";
import o from "./module-Y_19.js";
import i from "./module-ec_18.js";
import a from "./module-y_2_18.js";
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
