import n from "./module-G_2_21.js";
import i from "./module-X_22.js";
import { String } from "./module-J_22.js";
export default !!Object.getOwnPropertySymbols &&
  !i(function () {
    const t = Symbol("symbol detection");
    return (
      !String(t) ||
      !(Object(t) instanceof Symbol) ||
      (!Symbol.sham && n && n < 41)
    );
  });
