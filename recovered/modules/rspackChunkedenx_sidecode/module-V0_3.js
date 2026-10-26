import n from "./module-d_4.js";
import i from "./module-CP_3.js";
import o from "./module-Mi_3.js";
const s = require("./module-lN_3.js")("species");
export default function (t, r) {
  let e;
  const constructor = n(t).constructor;
  if (constructor === undefined || o((e = n(constructor)[s]))) {
    return r;
  }
  return i(e);
}
