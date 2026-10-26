import n from "./module-d_12.js";
import o from "./module-CP_11.js";
import i from "./module-Mi_11.js";
const a = require("./module-lN_11.js")("species");
export default function (r, t) {
  let e;
  const constructor = n(r).constructor;
  if (constructor === undefined || i((e = n(constructor)[a]))) {
    return t;
  }
  return o(e);
}
