import n from "./module-G_2_19.js";
import o from "./module-X_20.js";
import { String } from "./module-J_20.js";
export default !!Object.getOwnPropertySymbols &&
  !o(function () {
    const r = Symbol("symbol detection");
    return (
      !String(r) ||
      !(Object(r) instanceof Symbol) ||
      (!Symbol.sham && n && n < 41)
    );
  });
