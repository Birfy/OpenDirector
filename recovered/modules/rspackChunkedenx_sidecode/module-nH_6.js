import n from "./module-YR_6.js";
import o from "./module-O9_6.js";
const a = n("Symbol");
const a_keyFor = a.keyFor;
const s = o(a.prototype.valueOf);
export default a.isRegisteredSymbol ||
  function (t) {
    try {
      return a_keyFor(s(t)) !== undefined;
    } catch (t) {
      return false;
    }
  };
