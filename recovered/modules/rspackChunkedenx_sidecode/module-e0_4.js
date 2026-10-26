import n from "./module-X_5.js";
import { RegExp } from "./module-J_5.js";
export default n(function () {
  const t = RegExp(".", "s");
  return !(t.dotAll && t.exec("\n") && t.flags === "s");
});
