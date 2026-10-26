import { f } from "./module-t_5.js";
import i from "./module-D_2_4.js";
const o = require("./module-lN_4.js")("toStringTag");
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
