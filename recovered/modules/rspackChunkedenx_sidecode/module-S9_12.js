import $ from "./module-Zf_12.js";
import tt from "./module-Y_13.js";
import te from "./module-Md_12.js";
const tr = require("./module-lN_12.js")("toStringTag");
const ti =
  te(
    (function () {
      return arguments;
    })(),
  ) === "Arguments";
const to = (J, Z) => {
  try {
    return J[Z];
  } catch (J) {}
};
export default $
  ? te
  : function (J) {
      let Z;
      let Q;
      let $;
      if (J === undefined) {
        return "Undefined";
      }
      if (J === null) {
        return "Null";
      }
      if (typeof (Q = to((Z = Object(J)), tr)) === "string") {
        return Q;
      }
      if (ti) {
        return te(Z);
      }
      if (($ = te(Z)) === "Object" && tt(Z.callee)) {
        return "Arguments";
      }
      return $;
    };
