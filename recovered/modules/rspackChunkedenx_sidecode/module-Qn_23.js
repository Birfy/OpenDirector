import n from "./module-S9_22.js";
import i from "./module-C_23.js";
import o from "./module-Mi_22.js";
import s from "./module-at_22.js";
const a = require("./module-lN_22.js")("iterator");
export default function (t) {
  if (!o(t)) {
    return i(t, a) || i(t, "@@iterator") || s[n(t)];
  }
}
