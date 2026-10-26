import n from "./module-S9.js";
import o from "./module-C.js";
import i from "./module-Mi.js";
import a from "./module-at.js";
const s = require("./module-lN.js")("iterator");
export default function (t) {
  if (!i(t)) {
    return o(t, s) || o(t, "@@iterator") || a[n(t)];
  }
}
