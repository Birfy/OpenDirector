import n from "./module-S9_9.js";
import o from "./module-C_10.js";
import i from "./module-Mi_9.js";
import a from "./module-at_9.js";
const s = require("./module-lN_9.js")("iterator");
export default function (t) {
  if (!i(t)) {
    return o(t, s) || o(t, "@@iterator") || a[n(t)];
  }
}
