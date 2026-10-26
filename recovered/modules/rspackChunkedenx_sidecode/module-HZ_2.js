import { f } from "./module-t_3.js";
import i from "./module-D_2_2.js";
const o = require("./module-lN_2.js")("toStringTag");
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
