import n from "./module-y_2_18.js";
export default Number.isInteger ||
  function (r) {
    return !n(r) && isFinite(r) && Math.floor(r) === r;
  };
