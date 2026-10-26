import n from "./module-S9_13.js";
import o from "./module-C_14.js";
import i from "./module-Mi_13.js";
import a from "./module-at_13.js";
const s = require("./module-lN_13.js")("iterator");
export default function (r) {
  if (!i(r)) {
    return o(r, s) || o(r, "@@iterator") || a[n(r)];
  }
}
