import n from "./module-S9_4.js";
import i from "./module-C_5.js";
import o from "./module-Mi_4.js";
import s from "./module-at_4.js";
const a = require("./module-lN_4.js")("iterator");
export default function (t) {
  if (!o(t)) {
    return i(t, a) || i(t, "@@iterator") || s[n(t)];
  }
}
