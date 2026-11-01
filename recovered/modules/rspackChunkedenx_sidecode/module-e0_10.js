import n from "./module-X_11.js";
import { RegExp } from "./module-J_11.js";
export default n(function () {
  const t = RegExp(".", "s");
  return !(t.dotAll && t.exec("\n") && t.flags === "s");
});
