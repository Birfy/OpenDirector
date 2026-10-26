import n from "./module-EV_12.js";
import o from "./module-yM_12.js";
import i from "./module-y_2_11.js";
const a = require("./module-lN_11.js")("species");
export default function (r) {
  let t;
  if (n(r)) {
    if (o((t = r.constructor)) && (t === Array || n(t.prototype))) {
      t = undefined;
    } else if (i(t) && (t = t[a]) === null) {
      t = undefined;
    }
  }
  if (t === undefined) {
    return Array;
  }
  return t;
}
