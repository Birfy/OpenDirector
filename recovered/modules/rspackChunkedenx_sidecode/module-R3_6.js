import n from "./module-y_2_5.js";
export default Number.isInteger ||
  function (t) {
    return !n(t) && isFinite(t) && Math.floor(t) === t;
  };
