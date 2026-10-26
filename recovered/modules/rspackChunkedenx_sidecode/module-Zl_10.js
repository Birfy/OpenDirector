import { isFinite } from "./module-J_9.js";
export default Number.isFinite ||
  function (t) {
    return typeof t === "number" && isFinite(t);
  };
