import n from "./module-X_19.js";
import { RegExp } from "./module-J_19.js";
export default n(function () {
  const r = RegExp("(?<a>b)", "g");
  return r.exec("b").groups.a !== "b" || "b".replace(r, "$<a>c") !== "bc";
});
