import n from "./module-Zf_15.js";
import o from "./module-Y_16.js";
import i from "./module-Md_15.js";
const a = require("./module-lN_15.js")("toStringTag");
const u =
  i(
    (function () {
      return arguments;
    })(),
  ) === "Arguments";
const c = (r, t) => {
  try {
    return r[t];
  } catch (r) {}
};
export default n
  ? i
  : function (r) {
      let t;
      let e;
      let n;
      if (r === undefined) {
        return "Undefined";
      }
      if (r === null) {
        return "Null";
      }
      if (typeof (e = c((t = Object(r)), a)) === "string") {
        return e;
      }
      if (u) {
        return i(t);
      }
      if ((n = i(t)) === "Object" && o(t.callee)) {
        return "Arguments";
      }
      return n;
    };
