import n from "./module-d_8.js";
import o from "./module-CP_7.js";
import i from "./module-Mi_7.js";
const a = require("./module-lN_7.js")("species");
export default function (r, t) {
  let e;
  const constructor = n(r).constructor;
  if (constructor === undefined || i((e = n(constructor)[a]))) {
    return t;
  }
  return o(e);
}
