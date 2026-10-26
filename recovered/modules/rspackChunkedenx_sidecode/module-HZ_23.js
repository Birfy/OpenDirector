import { f } from "./module-t_24.js";
import o from "./module-D_2_23.js";
const i = require("./module-lN_23.js")("toStringTag");
export default function (t, value, e) {
  if (t && !e) {
    t = t.prototype;
  }
  if (t && !o(t, i)) {
    f(t, i, {
      configurable: true,
      value,
    });
  }
}
