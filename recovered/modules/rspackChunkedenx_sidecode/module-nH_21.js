import n from "./module-YR_21.js";
import i from "./module-O9_21.js";
const o = n("Symbol");
const o_keyFor = o.keyFor;
const a = i(o.prototype.valueOf);
export default o.isRegisteredSymbol ||
  function (t) {
    try {
      return o_keyFor(a(t)) !== undefined;
    } catch (t) {
      return false;
    }
  };
