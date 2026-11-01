import $ from "./module-YR_12.js";
import tt from "./module-O9_12.js";
const te = $("Symbol");
const te_keyFor = te.keyFor;
const tn = tt(te.prototype.valueOf);
export default te.isRegisteredSymbol ||
  function (J) {
    try {
      return te_keyFor(tn(J)) !== undefined;
    } catch (J) {
      return false;
    }
  };
