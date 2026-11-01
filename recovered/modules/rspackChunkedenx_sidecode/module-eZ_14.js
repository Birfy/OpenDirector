import n from "./module-G_2_14.js";
import o from "./module-X_15.js";
import { String } from "./module-J_15.js";
export default !!Object.getOwnPropertySymbols &&
  !o(function () {
    const t = Symbol("symbol detection");
    return (
      !String(t) ||
      !(Object(t) instanceof Symbol) ||
      (!Symbol.sham && n && n < 41)
    );
  });
