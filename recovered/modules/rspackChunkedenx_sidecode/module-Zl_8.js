import { isFinite } from "./module-J_7.js";
export default Number.isFinite ||
  function (t) {
    return typeof t === "number" && isFinite(t);
  };
