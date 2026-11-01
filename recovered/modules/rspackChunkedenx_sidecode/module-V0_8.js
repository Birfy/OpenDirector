import n from "./module-d_9.js";
import i from "./module-CP_8.js";
import o from "./module-Mi_8.js";
const s = require("./module-lN_8.js")("species");
export default function (t, r) {
  let e;
  const constructor = n(t).constructor;
  if (constructor === undefined || o((e = n(constructor)[s]))) {
    return r;
  }
  return i(e);
}
