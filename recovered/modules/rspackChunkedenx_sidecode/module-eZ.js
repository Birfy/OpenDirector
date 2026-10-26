import n from "./module-G_2.js";
import o from "./module-X.js";
import { String } from "./module-J.js";
export default !!Object.getOwnPropertySymbols &&
  !o(function () {
    const t = Symbol("symbol detection");
    return (
      !String(t) ||
      !(Object(t) instanceof Symbol) ||
      (!Symbol.sham && n && n < 41)
    );
  });
