import n from "./module-d_16.js";
import o from "./module-CP_15.js";
import i from "./module-Mi_15.js";
const a = require("./module-lN_15.js")("species");
export default function (r, t) {
  let e;
  const constructor = n(r).constructor;
  if (constructor === undefined || i((e = n(constructor)[a]))) {
    return t;
  }
  return o(e);
}
