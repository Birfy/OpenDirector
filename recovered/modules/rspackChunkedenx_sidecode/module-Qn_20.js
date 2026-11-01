import n from "./module-S9_19.js";
import o from "./module-C_20.js";
import i from "./module-Mi_19.js";
import a from "./module-at_19.js";
const s = require("./module-lN_19.js")("iterator");
export default function (r) {
  if (!i(r)) {
    return o(r, s) || o(r, "@@iterator") || a[n(r)];
  }
}
