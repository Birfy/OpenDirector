import n from "./module-Zf_14.js";
import o from "./module-Y_15.js";
import i from "./module-Md_14.js";
const a = require("./module-lN_14.js")("toStringTag");
const c =
  i(
    (function () {
      return arguments;
    })(),
  ) === "Arguments";
const u = (t, r) => {
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
      if (typeof (e = u((r = Object(t)), a)) === "string") {
        return e;
      }
      if (c) {
        return i(r);
      }
      if ((n = i(r)) === "Object" && o(r.callee)) {
        return "Arguments";
      }
      return n;
    };
