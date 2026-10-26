import n from "./module-EV_18.js";
import o from "./module-yM_18.js";
import i from "./module-y_2_17.js";
const a = require("./module-lN_17.js")("species");
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
