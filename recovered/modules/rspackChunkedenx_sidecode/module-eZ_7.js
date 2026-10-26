import n from "./module-G_2_7.js";
import o from "./module-X_8.js";
import { String } from "./module-J_8.js";
export default !!Object.getOwnPropertySymbols &&
  !o(function () {
    const r = Symbol("symbol detection");
    return (
      !String(r) ||
      !(Object(r) instanceof Symbol) ||
      (!Symbol.sham && n && n < 41)
    );
  });
