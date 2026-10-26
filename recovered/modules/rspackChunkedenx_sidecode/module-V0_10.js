import n from "./module-d_11.js";
import o from "./module-CP_10.js";
import i from "./module-Mi_10.js";
const a = require("./module-lN_10.js")("species");
export default function (t, r) {
  let e;
  const constructor = n(t).constructor;
  if (constructor === undefined || i((e = n(constructor)[a]))) {
    return r;
  }
  return o(e);
}
