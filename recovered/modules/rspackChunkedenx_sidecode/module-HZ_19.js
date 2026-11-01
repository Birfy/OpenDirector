import { f } from "./module-t_20.js";
import o from "./module-D_2_19.js";
const i = require("./module-lN_19.js")("toStringTag");
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
