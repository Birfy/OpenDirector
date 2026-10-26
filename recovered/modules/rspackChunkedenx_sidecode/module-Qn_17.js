import n from "./module-S9_16.js";
import o from "./module-C_17.js";
import i from "./module-Mi_16.js";
import a from "./module-at_16.js";
const s = require("./module-lN_16.js")("iterator");
export default function (t) {
  if (!i(t)) {
    return o(t, s) || o(t, "@@iterator") || a[n(t)];
  }
}
