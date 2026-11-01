import { isFinite } from "./module-J_13.js";
export default Number.isFinite ||
  function (J) {
    return typeof J === "number" && isFinite(J);
  };
