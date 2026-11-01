import n from "./module-d_15.js";
import o from "./module-CP_14.js";
import i from "./module-Mi_14.js";
const a = require("./module-lN_14.js")("species");
export default function (t, r) {
  let e;
  const constructor = n(t).constructor;
  if (constructor === undefined || i((e = n(constructor)[a]))) {
    return r;
  }
  return o(e);
}
