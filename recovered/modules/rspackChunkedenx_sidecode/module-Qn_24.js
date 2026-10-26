import n from "./module-S9_23.js";
import o from "./module-C_24.js";
import i from "./module-Mi_23.js";
import a from "./module-at_23.js";
const s = require("./module-lN_23.js")("iterator");
export default function (t) {
  if (!i(t)) {
    return o(t, s) || o(t, "@@iterator") || a[n(t)];
  }
}
