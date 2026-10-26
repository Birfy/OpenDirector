import { isFinite } from "./module-J_17.js";
export default Number.isFinite ||
  function (t) {
    return typeof t === "number" && isFinite(t);
  };
