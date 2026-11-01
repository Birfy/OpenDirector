import n from "./module-S9_2.js";
import i from "./module-C_3.js";
import o from "./module-Mi_2.js";
import s from "./module-at_2.js";
const a = require("./module-lN_2.js")("iterator");
export default function (t) {
  if (!o(t)) {
    return i(t, a) || i(t, "@@iterator") || s[n(t)];
  }
}
