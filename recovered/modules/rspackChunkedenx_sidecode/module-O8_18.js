import n from "./module-EV_19.js";
import o from "./module-yM_19.js";
import i from "./module-y_2_18.js";
const a = require("./module-lN_18.js")("species");
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
