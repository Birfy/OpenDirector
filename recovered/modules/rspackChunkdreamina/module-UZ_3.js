import n from "./module-xE_3.js";
import o from "./module-T_2.js";
import i from "./module-D.js";
import a from "./module-uK_4.js";
const s = require("./module-Nt_3.js")("iterator");
export default function (e) {
  if (!i(e)) {
    return o(e, s) || o(e, "@@iterator") || a[n(e)];
  }
}
