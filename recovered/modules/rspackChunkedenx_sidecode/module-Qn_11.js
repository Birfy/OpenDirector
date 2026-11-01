import n from "./module-S9_10.js";
import o from "./module-C_11.js";
import i from "./module-Mi_10.js";
import a from "./module-at_10.js";
const s = require("./module-lN_10.js")("iterator");
export default function (t) {
  if (!i(t)) {
    return o(t, s) || o(t, "@@iterator") || a[n(t)];
  }
}
