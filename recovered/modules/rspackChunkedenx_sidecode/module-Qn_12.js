import n from "./module-S9_11.js";
import o from "./module-C_12.js";
import i from "./module-Mi_11.js";
import a from "./module-at_11.js";
const s = require("./module-lN_11.js")("iterator");
export default function (r) {
  if (!i(r)) {
    return o(r, s) || o(r, "@@iterator") || a[n(r)];
  }
}
