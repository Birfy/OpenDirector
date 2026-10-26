import { f } from "./module-t_23.js";
import i from "./module-D_2_22.js";
const o = require("./module-lN_22.js")("toStringTag");
export default function (t, value, e) {
  if (t && !e) {
    t = t.prototype;
  }
  if (t && !i(t, o)) {
    f(t, o, {
      configurable: true,
      value,
    });
  }
}
