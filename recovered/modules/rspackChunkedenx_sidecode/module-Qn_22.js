import n from "./module-S9_21.js";
import i from "./module-C_22.js";
import o from "./module-Mi_21.js";
import s from "./module-at_21.js";
const a = require("./module-lN_21.js")("iterator");
export default function (t) {
  if (!o(t)) {
    return i(t, a) || i(t, "@@iterator") || s[n(t)];
  }
}
