import n from "./module-X_22.js";
import { RegExp } from "./module-J_22.js";
export default n(function () {
  const t = RegExp(".", "s");
  return !(t.dotAll && t.exec("\n") && t.flags === "s");
});
