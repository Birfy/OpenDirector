import { isFinite } from "./module-u.js";
export default Number.isFinite ||
  function (e) {
    return typeof e === "number" && isFinite(e);
  };
