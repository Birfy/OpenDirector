import n from "./module-d_21.js";
import o from "./module-CP_20.js";
import i from "./module-Mi_20.js";
const a = require("./module-lN_20.js")("species");
export default function (t, r) {
  let e;
  const constructor = n(t).constructor;
  if (constructor === undefined || i((e = n(constructor)[a]))) {
    return r;
  }
  return o(e);
}
