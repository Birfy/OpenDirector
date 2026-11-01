import n from "./module-YR_23.js";
import o from "./module-O9_23.js";
const i = n("Symbol");
const i_keyFor = i.keyFor;
const s = o(i.prototype.valueOf);
export default i.isRegisteredSymbol ||
  function (t) {
    try {
      return i_keyFor(s(t)) !== undefined;
    } catch (t) {
      return false;
    }
  };
