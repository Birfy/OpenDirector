import n from "./module-C.js";
export default Array.isArray ||
  function (e) {
    return n(e) === "Array";
  };
