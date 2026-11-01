import $ from "./module-X_13.js";
import { RegExp } from "./module-J_13.js";
export default $(function () {
  const J = RegExp(".", "s");
  return !(J.dotAll && J.exec("\n") && J.flags === "s");
});
