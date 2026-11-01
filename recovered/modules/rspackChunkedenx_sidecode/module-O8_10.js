import n from "./module-EV_11.js";
import o from "./module-yM_11.js";
import i from "./module-y_2_10.js";
const a = require("./module-lN_10.js")("species");
export default function (t) {
  let r;
  if (n(t)) {
    if (o((r = t.constructor)) && (r === Array || n(r.prototype))) {
      r = undefined;
    } else if (i(r) && (r = r[a]) === null) {
      r = undefined;
    }
  }
  if (r === undefined) {
    return Array;
  }
  return r;
}
