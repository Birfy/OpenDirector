import n from "./module-X_3.js";
import { RegExp } from "./module-J_3.js";
export default n(function () {
  const t = RegExp("(?<a>b)", "g");
  return t.exec("b").groups.a !== "b" || "b".replace(t, "$<a>c") !== "bc";
});
