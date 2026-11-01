import n from "./module-d_18.js";
import o from "./module-CP_17.js";
import i from "./module-Mi_17.js";
const a = require("./module-lN_17.js")("species");
export default function (r, t) {
  let e;
  const constructor = n(r).constructor;
  if (constructor === undefined || i((e = n(constructor)[a]))) {
    return t;
  }
  return o(e);
}
