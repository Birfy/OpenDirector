import n from "./module-d_14.js";
import o from "./module-CP_13.js";
import i from "./module-Mi_13.js";
const a = require("./module-lN_13.js")("species");
export default function (r, t) {
  let e;
  const constructor = n(r).constructor;
  if (constructor === undefined || i((e = n(constructor)[a]))) {
    return t;
  }
  return o(e);
}
