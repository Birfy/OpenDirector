import { f } from "./module-R_2.js";
import o from "./module-h.js";
const i = require("./module-Nt_3.js")("toStringTag");
export default function (e, value, r) {
  if (e && !r) {
    e = e.prototype;
  }
  if (e && !o(e, i)) {
    f(e, i, {
      configurable: true,
      value,
    });
  }
}
