import n from "./module-X_7.js";
import { RegExp } from "./module-J_7.js";
export default n(function () {
  const t = RegExp("(?<a>b)", "g");
  return t.exec("b").groups.a !== "b" || "b".replace(t, "$<a>c") !== "bc";
});
