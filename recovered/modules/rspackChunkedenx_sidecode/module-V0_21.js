import n from "./module-d_22.js";
import i from "./module-CP_21.js";
import o from "./module-Mi_21.js";
const s = require("./module-lN_21.js")("species");
export default function (t, r) {
  let e;
  const constructor = n(t).constructor;
  if (constructor === undefined || o((e = n(constructor)[s]))) {
    return r;
  }
  return i(e);
}
