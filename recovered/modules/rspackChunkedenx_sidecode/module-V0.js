import n from "./module-d.js";
import o from "./module-CP.js";
import i from "./module-Mi.js";
const a = require("./module-lN.js")("species");
export default function (t, r) {
  let e;
  const constructor = n(t).constructor;
  if (constructor === undefined || i((e = n(constructor)[a]))) {
    return r;
  }
  return o(e);
}
