import n from "./module-bV_7.js";
const a = 2 ** -52;
const s = 2 ** -23;
const u = 2 ** 127 * (2 - s);
const c = 2 ** -126;
export default Math.fround ||
  function (r) {
    let t;
    let e;
    const i = +r;
    const f = Math.abs(i);
    const l = n(i);
    if (f < c) {
      return l * (f / c / s + 1 / a - 1 / a) * c * s;
    }
    if ((e = (t = (1 + s / a) * f) - (t - f)) > u || e != e) {
      return Infinity * l;
    }
    return l * e;
  };
