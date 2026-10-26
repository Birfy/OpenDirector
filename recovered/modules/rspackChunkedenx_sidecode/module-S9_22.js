import n from "./module-Zf_22.js";
import i from "./module-Y_23.js";
import o from "./module-Md_22.js";
const s = require("./module-lN_22.js")("toStringTag");
const u =
  o(
    (function () {
      return arguments;
    })(),
  ) === "Arguments";
const c = (t, r) => {
  try {
    return t[r];
  } catch (t) {}
};
export default n
  ? o
  : function (t) {
      let r;
      let e;
      let n;
      if (t === undefined) {
        return "Undefined";
      }
      if (t === null) {
        return "Null";
      }
      if (typeof (e = c((r = Object(t)), s)) === "string") {
        return e;
      }
      if (u) {
        return o(r);
      }
      if ((n = o(r)) === "Object" && i(r.callee)) {
        return "Arguments";
      }
      return n;
    };
