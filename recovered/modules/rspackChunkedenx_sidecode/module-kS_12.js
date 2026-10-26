import $ from "./module-bV_12.js";
const tr = 2 ** -52;
const tn = 2 ** -23;
const ti = 2 ** 127 * (2 - tn);
const to = 2 ** -126;
export default Math.fround ||
  function (J) {
    let Z;
    let Q;
    const te = +J;
    const ta = Math.abs(te);
    const ts = $(te);
    if (ta < to) {
      return ts * (ta / to / tn + 1 / tr - 1 / tr) * to * tn;
    }
    if ((Q = (Z = (1 + tn / tr) * ta) - (Z - ta)) > ti || Q != Q) {
      return Infinity * ts;
    }
    return ts * Q;
  };
