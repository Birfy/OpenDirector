import { f } from "./module-t_21.js";
import o from "./module-D_2_20.js";
const i = require("./module-lN_20.js")("toStringTag");
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
