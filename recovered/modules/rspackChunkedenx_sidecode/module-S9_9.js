import n from "./module-Zf_9.js";
import o from "./module-Y_10.js";
import i from "./module-Md_9.js";
const a = require("./module-lN_9.js")("toStringTag");
const u =
  i(
    (function () {
      return arguments;
    })(),
  ) === "Arguments";
const c = (t, e) => {
  try {
    return t[e];
  } catch (t) {}
};
export default n
  ? i
  : function (t) {
      let e;
      let r;
      let n;
      if (t === undefined) {
        return "Undefined";
      }
      if (t === null) {
        return "Null";
      }
      if (typeof (r = c((e = Object(t)), a)) === "string") {
        return r;
      }
      if (u) {
        return i(e);
      }
      if ((n = i(e)) === "Object" && o(e.callee)) {
        return "Arguments";
      }
      return n;
    };
