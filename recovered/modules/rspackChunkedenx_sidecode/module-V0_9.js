import n from "./module-d_10.js";
import o from "./module-CP_9.js";
import i from "./module-Mi_9.js";
const a = require("./module-lN_9.js")("species");
export default function (t, e) {
  let r;
  const constructor = n(t).constructor;
  if (constructor === undefined || i((r = n(constructor)[a]))) {
    return e;
  }
  return o(r);
}
