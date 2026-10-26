import n from "./module-d_3.js";
import i from "./module-CP_2.js";
import o from "./module-Mi_2.js";
const s = require("./module-lN_2.js")("species");
export default function (t, r) {
  let e;
  const constructor = n(t).constructor;
  if (constructor === undefined || o((e = n(constructor)[s]))) {
    return r;
  }
  return i(e);
}
