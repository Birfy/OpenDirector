import n from "./module-Zf_16.js";
import o from "./module-Y_17.js";
import i from "./module-Md_16.js";
const a = require("./module-lN_16.js")("toStringTag");
const u =
  i(
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
  ? i
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
      if (typeof (e = c((r = Object(t)), a)) === "string") {
        return e;
      }
      if (u) {
        return i(r);
      }
      if ((n = i(r)) === "Object" && o(r.callee)) {
        return "Arguments";
      }
      return n;
    };
