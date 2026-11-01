import n from "./module-IF_2.js";
import o from "./module-Z.js";
import i from "./module-D.js";
const a = require("./module-Nt_3.js")("species");
export default function (e, t) {
  let r;
  const constructor = n(e).constructor;
  if (constructor === undefined || i((r = n(constructor)[a]))) {
    return t;
  }
  return o(r);
}
