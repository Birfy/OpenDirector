import $ from "./module-G_2_12.js";
import tt from "./module-X_13.js";
import { String } from "./module-J_13.js";
export default !!Object.getOwnPropertySymbols &&
  !tt(function () {
    const J = Symbol("symbol detection");
    return (
      !String(J) ||
      !(Object(J) instanceof Symbol) ||
      (!Symbol.sham && $ && $ < 41)
    );
  });
