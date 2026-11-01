import n from "./module-S9_17.js";
import o from "./module-C_18.js";
import i from "./module-Mi_17.js";
import a from "./module-at_17.js";
const s = require("./module-lN_17.js")("iterator");
export default function (r) {
  if (!i(r)) {
    return o(r, s) || o(r, "@@iterator") || a[n(r)];
  }
}
