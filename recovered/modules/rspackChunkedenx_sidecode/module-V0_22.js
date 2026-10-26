import n from "./module-d_23.js";
import i from "./module-CP_22.js";
import o from "./module-Mi_22.js";
const s = require("./module-lN_22.js")("species");
export default function (t, r) {
  let e;
  const constructor = n(t).constructor;
  if (constructor === undefined || o((e = n(constructor)[s]))) {
    return r;
  }
  return i(e);
}
