import n from "./module-N.js";
import o from "./module-C.js";
const i = require("./module-Nt_3.js")("match");
export default function (e) {
  let t;
  return n(e) && ((t = e[i]) !== undefined ? !!t : o(e) === "RegExp");
}
