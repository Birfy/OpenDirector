import n from "./module-Zf_6.js";
import o from "./module-Y_7.js";
import a from "./module-Md_6.js";
const i = require("./module-lN_6.js")("toStringTag");
const c =
  a(
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
  ? a
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
      if (typeof (e = u((r = Object(t)), i)) === "string") {
        return e;
      }
      if (c) {
        return a(r);
      }
      if ((n = a(r)) === "Object" && o(r.callee)) {
        return "Arguments";
      }
      return n;
    };
