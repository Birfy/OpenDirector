import n from "./module-EV_15.js";
import o from "./module-yM_15.js";
import i from "./module-y_2_14.js";
const a = require("./module-lN_14.js")("species");
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
