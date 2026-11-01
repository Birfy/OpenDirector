import { isFinite } from "./module-J_8.js";
export default Number.isFinite ||
  function (r) {
    return typeof r === "number" && isFinite(r);
  };
