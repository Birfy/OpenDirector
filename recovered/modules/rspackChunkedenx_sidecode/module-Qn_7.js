import n from "./module-S9_6.js";
import o from "./module-C_7.js";
import a from "./module-Mi_6.js";
import i from "./module-at_6.js";
const s = require("./module-lN_6.js")("iterator");
export default function (t) {
  if (!a(t)) {
    return o(t, s) || o(t, "@@iterator") || i[n(t)];
  }
}
