import n from "./module-YR_7.js";
import o from "./module-O9_7.js";
const i = n("Symbol");
const i_keyFor = i.keyFor;
const s = o(i.prototype.valueOf);
export default i.isRegisteredSymbol ||
  function (r) {
    try {
      return i_keyFor(s(r)) !== undefined;
    } catch (r) {
      return false;
    }
  };
