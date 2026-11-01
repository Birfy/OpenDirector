import n from "./module-X_7.js";
import { RegExp } from "./module-J_7.js";
export default n(function () {
  const t = RegExp(".", "s");
  return !(t.dotAll && t.exec("\n") && t.flags === "s");
});
