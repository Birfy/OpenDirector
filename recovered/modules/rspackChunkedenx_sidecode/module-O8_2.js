import n from "./module-EV_3.js";
import i from "./module-yM_3.js";
import o from "./module-y_2_2.js";
const s = require("./module-lN_2.js")("species");
export default function (t) {
  let r;
  if (n(t)) {
    if (i((r = t.constructor)) && (r === Array || n(r.prototype))) {
      r = undefined;
    } else if (o(r) && (r = r[s]) === null) {
      r = undefined;
    }
  }
  if (r === undefined) {
    return Array;
  }
  return r;
}
