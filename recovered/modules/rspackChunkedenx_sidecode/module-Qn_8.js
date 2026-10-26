import n from "./module-S9_7.js";
import o from "./module-C_8.js";
import i from "./module-Mi_7.js";
import a from "./module-at_7.js";
const s = require("./module-lN_7.js")("iterator");
export default function (r) {
  if (!i(r)) {
    return o(r, s) || o(r, "@@iterator") || a[n(r)];
  }
}
