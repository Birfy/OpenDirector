import n from "./module-VV_4.js";
import { RegExp } from "./module-u.js";
export default n(function () {
  const e = RegExp("(?<a>b)", "g");
  return e.exec("b").groups.a !== "b" || "b".replace(e, "$<a>c") !== "bc";
});
