import n from "./module-z_2.js";
import o from "./module-VV_4.js";
import { String } from "./module-u.js";
export default !!Object.getOwnPropertySymbols &&
  !o(function () {
    const e = Symbol("symbol detection");
    return (
      !String(e) ||
      !(Object(e) instanceof Symbol) ||
      (!Symbol.sham && n && n < 41)
    );
  });
