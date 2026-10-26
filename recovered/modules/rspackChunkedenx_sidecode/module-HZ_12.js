import { f } from "./module-t_13.js";
import tt from "./module-D_2_12.js";
const te = require("./module-lN_12.js")("toStringTag");
export default function (J, value, Q) {
  if (J && !Q) {
    J = J.prototype;
  }
  if (J && !tt(J, te)) {
    f(J, te, {
      configurable: true,
      value,
    });
  }
}
