import n from "./module-d_17.js";
import o from "./module-CP_16.js";
import i from "./module-Mi_16.js";
const a = require("./module-lN_16.js")("species");
export default function (t, r) {
  let e;
  const constructor = n(t).constructor;
  if (constructor === undefined || i((e = n(constructor)[a]))) {
    return r;
  }
  return o(e);
}
