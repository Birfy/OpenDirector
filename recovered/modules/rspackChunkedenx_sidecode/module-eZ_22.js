import n from "./module-G_2_22.js";
import i from "./module-X_23.js";
import { String } from "./module-J_23.js";
export default !!Object.getOwnPropertySymbols &&
  !i(function () {
    const t = Symbol("symbol detection");
    return (
      !String(t) ||
      !(Object(t) instanceof Symbol) ||
      (!Symbol.sham && n && n < 41)
    );
  });
