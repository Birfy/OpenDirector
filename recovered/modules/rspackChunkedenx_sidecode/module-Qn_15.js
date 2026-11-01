import n from "./module-S9_14.js";
import o from "./module-C_15.js";
import i from "./module-Mi_14.js";
import a from "./module-at_14.js";
const s = require("./module-lN_14.js")("iterator");
export default function (t) {
  if (!i(t)) {
    return o(t, s) || o(t, "@@iterator") || a[n(t)];
  }
}
