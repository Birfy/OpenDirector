import n from "./module-S9_3.js";
import i from "./module-C_4.js";
import o from "./module-Mi_3.js";
import s from "./module-at_3.js";
const a = require("./module-lN_3.js")("iterator");
export default function (t) {
  if (!o(t)) {
    return i(t, a) || i(t, "@@iterator") || s[n(t)];
  }
}
