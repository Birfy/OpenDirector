import n from "./module-S9_5.js";
import i from "./module-C_6.js";
import o from "./module-Mi_5.js";
import s from "./module-at_5.js";
const a = require("./module-lN_5.js")("iterator");
export default function (t) {
  if (!o(t)) {
    return i(t, a) || i(t, "@@iterator") || s[n(t)];
  }
}
