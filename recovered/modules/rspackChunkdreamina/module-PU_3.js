import n from "./module-N.js";
export default Number.isInteger ||
  function (e) {
    return !n(e) && isFinite(e) && Math.floor(e) === e;
  };
