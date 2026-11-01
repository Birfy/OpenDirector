import n from "./module-EV_7.js";
import o from "./module-yM_7.js";
import a from "./module-y_2_6.js";
const i = require("./module-lN_6.js")("species");
export default function (t) {
  let r;
  if (n(t)) {
    if (o((r = t.constructor)) && (r === Array || n(r.prototype))) {
      r = undefined;
    } else if (a(r) && (r = r[i]) === null) {
      r = undefined;
    }
  }
  if (r === undefined) {
    return Array;
  }
  return r;
}
