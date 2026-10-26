import n from "./module-EV_10.js";
import o from "./module-yM_10.js";
import i from "./module-y_2_9.js";
const a = require("./module-lN_9.js")("species");
export default function (t) {
  let e;
  if (n(t)) {
    if (o((e = t.constructor)) && (e === Array || n(e.prototype))) {
      e = undefined;
    } else if (i(e) && (e = e[a]) === null) {
      e = undefined;
    }
  }
  if (e === undefined) {
    return Array;
  }
  return e;
}
