import n from "./module-S9_15.js";
import o from "./module-C_16.js";
import i from "./module-Mi_15.js";
import a from "./module-at_15.js";
const s = require("./module-lN_15.js")("iterator");
export default function (r) {
  if (!i(r)) {
    return o(r, s) || o(r, "@@iterator") || a[n(r)];
  }
}
