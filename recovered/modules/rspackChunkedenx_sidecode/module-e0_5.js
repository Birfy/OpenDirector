import n from "./module-X_6.js";
import { RegExp } from "./module-J_6.js";
export default n(function () {
  const t = RegExp(".", "s");
  return !(t.dotAll && t.exec("\n") && t.flags === "s");
});
