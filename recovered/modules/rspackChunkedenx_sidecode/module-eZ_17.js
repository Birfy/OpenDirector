import n from "./module-G_2_17.js";
import o from "./module-X_18.js";
import { String } from "./module-J_18.js";
export default !!Object.getOwnPropertySymbols &&
  !o(function () {
    const r = Symbol("symbol detection");
    return (
      !String(r) ||
      !(Object(r) instanceof Symbol) ||
      (!Symbol.sham && n && n < 41)
    );
  });
