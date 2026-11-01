import n from "./module-X.js";
import { RegExp } from "./module-J.js";
export default n(function () {
  const t = RegExp(".", "s");
  return !(t.dotAll && t.exec("\n") && t.flags === "s");
});
