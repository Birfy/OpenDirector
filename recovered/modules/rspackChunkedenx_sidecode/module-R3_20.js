import n from "./module-y_2_19.js";
export default Number.isInteger ||
  function (r) {
    return !n(r) && isFinite(r) && Math.floor(r) === r;
  };
