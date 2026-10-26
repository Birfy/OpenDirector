import n from "./module-EV.js";
import o from "./module-yM.js";
import i from "./module-y_2.js";
const a = require("./module-lN.js")("species");
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
