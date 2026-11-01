import { f } from "./module-t_8.js";
import o from "./module-D_2_7.js";
const i = require("./module-lN_7.js")("toStringTag");
export default function (r, value, e) {
  if (r && !e) {
    r = r.prototype;
  }
  if (r && !o(r, i)) {
    f(r, i, {
      configurable: true,
      value,
    });
  }
}
