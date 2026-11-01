import n from "./module-X_21.js";
import { RegExp } from "./module-J_21.js";
export default n(function () {
  const t = RegExp(".", "s");
  return !(t.dotAll && t.exec("\n") && t.flags === "s");
});
