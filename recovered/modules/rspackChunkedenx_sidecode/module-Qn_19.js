import n from "./module-S9_18.js";
import o from "./module-C_19.js";
import i from "./module-Mi_18.js";
import a from "./module-at_18.js";
const s = require("./module-lN_18.js")("iterator");
export default function (r) {
  if (!i(r)) {
    return o(r, s) || o(r, "@@iterator") || a[n(r)];
  }
}
