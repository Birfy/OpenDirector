import { f } from "./module-t_10.js";
import o from "./module-D_2_9.js";
const i = require("./module-lN_9.js")("toStringTag");
export default function (t, value, r) {
  if (t && !r) {
    t = t.prototype;
  }
  if (t && !o(t, i)) {
    f(t, i, {
      configurable: true,
      value,
    });
  }
}
