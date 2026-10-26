import { f } from "./module-t_18.js";
import o from "./module-D_2_17.js";
const i = require("./module-lN_17.js")("toStringTag");
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
