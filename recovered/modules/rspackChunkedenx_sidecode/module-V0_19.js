import n from "./module-d_20.js";
import o from "./module-CP_19.js";
import i from "./module-Mi_19.js";
const a = require("./module-lN_19.js")("species");
export default function (r, t) {
  let e;
  const constructor = n(r).constructor;
  if (constructor === undefined || i((e = n(constructor)[a]))) {
    return t;
  }
  return o(e);
}
