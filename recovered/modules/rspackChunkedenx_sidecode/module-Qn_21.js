import n from "./module-S9_20.js";
import o from "./module-C_21.js";
import i from "./module-Mi_20.js";
import a from "./module-at_20.js";
const s = require("./module-lN_20.js")("iterator");
export default function (t) {
  if (!i(t)) {
    return o(t, s) || o(t, "@@iterator") || a[n(t)];
  }
}
