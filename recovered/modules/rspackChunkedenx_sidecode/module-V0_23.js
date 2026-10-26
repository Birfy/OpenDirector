import n from "./module-d_24.js";
import o from "./module-CP_23.js";
import i from "./module-Mi_23.js";
const a = require("./module-lN_23.js")("species");
export default function (t, r) {
  let e;
  const constructor = n(t).constructor;
  if (constructor === undefined || i((e = n(constructor)[a]))) {
    return r;
  }
  return o(e);
}
