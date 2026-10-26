import n from "./module-Zf_19.js";
import o from "./module-Y_20.js";
import i from "./module-Md_19.js";
const a = require("./module-lN_19.js")("toStringTag");
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
