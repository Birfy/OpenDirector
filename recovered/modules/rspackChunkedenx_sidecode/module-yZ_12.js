import $ from "./module-X_13.js";
import { RegExp } from "./module-J_13.js";
export default $(function () {
  const J = RegExp("(?<a>b)", "g");
  return J.exec("b").groups.a !== "b" || "b".replace(J, "$<a>c") !== "bc";
});
