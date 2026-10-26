import { f } from "./module-t_7.js";
import o from "./module-D_2_6.js";
const a = require("./module-lN_6.js")("toStringTag");
export default function (t, value, e) {
  if (t && !e) {
    t = t.prototype;
  }
  if (t && !o(t, a)) {
    f(t, a, {
      configurable: true,
      value,
    });
  }
}
