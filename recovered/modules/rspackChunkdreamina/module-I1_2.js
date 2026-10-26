import n from "./module-v.js";
const a = 2 ** -52;
const s = 2 ** -23;
const u = 2 ** 127 * (2 - s);
const c = 2 ** -126;
export default Math.fround ||
  function (e) {
    let t;
    let r;
    const i = +e;
    const f = Math.abs(i);
    const l = n(i);
    if (f < c) {
      return l * (f / c / s + 1 / a - 1 / a) * c * s;
    }
    if ((r = (t = (1 + s / a) * f) - (t - f)) > u || r != r) {
      return Infinity * l;
    }
    return l * r;
  };
