import n from "./module-d_6.js";
import i from "./module-CP_5.js";
import o from "./module-Mi_5.js";
const s = require("./module-lN_5.js")("species");
export default function (t, r) {
  let e;
  const constructor = n(t).constructor;
  if (constructor === undefined || o((e = n(constructor)[s]))) {
    return r;
  }
  return i(e);
}
