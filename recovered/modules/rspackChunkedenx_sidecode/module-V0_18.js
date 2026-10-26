import n from "./module-d_19.js";
import o from "./module-CP_18.js";
import i from "./module-Mi_18.js";
const a = require("./module-lN_18.js")("species");
export default function (r, t) {
  let e;
  const constructor = n(r).constructor;
  if (constructor === undefined || i((e = n(constructor)[a]))) {
    return t;
  }
  return o(e);
}
