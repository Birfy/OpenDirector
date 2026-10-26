import n from "./module-Y.js";
import o from "./module-o.js";
const i = n("Symbol");
const i_keyFor = i.keyFor;
const s = o(i.prototype.valueOf);
export default i.isRegisteredSymbol ||
  function (e) {
    try {
      return i_keyFor(s(e)) !== undefined;
    } catch (e) {
      return false;
    }
  };
