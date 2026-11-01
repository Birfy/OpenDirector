import n from "./module-M5_2.js";
import o from "./module-r.js";
import i from "./module-C.js";
const a = require("./module-Nt_3.js")("toStringTag");
const u =
  i(
    (function () {
      return arguments;
    })(),
  ) === "Arguments";
const c = (e, t) => {
  try {
    return e[t];
  } catch (e) {}
};
export default n
  ? i
  : function (e) {
      let t;
      let r;
      let n;
      if (e === undefined) {
        return "Undefined";
      }
      if (e === null) {
        return "Null";
      }
      if (typeof (r = c((t = Object(e)), a)) === "string") {
        return r;
      }
      if (u) {
        return i(t);
      }
      if ((n = i(t)) === "Object" && o(t.callee)) {
        return "Arguments";
      }
      return n;
    };
