import n from "./module-EV_20.js";
import o from "./module-yM_20.js";
import i from "./module-y_2_19.js";
const a = require("./module-lN_19.js")("species");
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
