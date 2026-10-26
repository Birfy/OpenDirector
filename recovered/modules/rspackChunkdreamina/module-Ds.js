import n from "./module-DN_2.js";
import o from "./module-c2.js";
import i from "./module-N.js";
const a = require("./module-Nt_3.js")("species");
export default function (e) {
  let t;
  if (n(e)) {
    if (o((t = e.constructor)) && (t === Array || n(t.prototype))) {
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
