import { f } from "./module-t.js";
import o from "./module-D_2.js";
const i = require("./module-lN.js")("toStringTag");
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
