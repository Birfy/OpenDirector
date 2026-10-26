import $ from "./module-y_2_12.js";
export default Number.isInteger ||
  function (J) {
    return !$(J) && isFinite(J) && Math.floor(J) === J;
  };
