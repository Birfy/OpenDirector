import n from "./module-G_2_16.js";
import o from "./module-X_17.js";
import { String } from "./module-J_17.js";
export default !!Object.getOwnPropertySymbols &&
  !o(function () {
    const t = Symbol("symbol detection");
    return (
      !String(t) ||
      !(Object(t) instanceof Symbol) ||
      (!Symbol.sham && n && n < 41)
    );
  });
