import n from "./module-d_7.js";
import o from "./module-CP_6.js";
import a from "./module-Mi_6.js";
const i = require("./module-lN_6.js")("species");
export default function (t, r) {
  let e;
  const constructor = n(t).constructor;
  if (constructor === undefined || a((e = n(constructor)[i]))) {
    return r;
  }
  return o(e);
}
