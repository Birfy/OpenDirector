import n from "./module-S9_8.js";
import i from "./module-C_9.js";
import o from "./module-Mi_8.js";
import s from "./module-at_8.js";
const a = require("./module-lN_8.js")("iterator");
export default function (t) {
  if (!o(t)) {
    return i(t, a) || i(t, "@@iterator") || s[n(t)];
  }
}
