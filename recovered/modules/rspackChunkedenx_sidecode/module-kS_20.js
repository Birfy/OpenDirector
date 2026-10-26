import n from "./module-bV_20.js";
const a = 2 ** -52;
const s = 2 ** -23;
const c = 2 ** 127 * (2 - s);
const u = 2 ** -126;
export default Math.fround ||
  function (t) {
    let r;
    let e;
    const i = +t;
    const f = Math.abs(i);
    const l = n(i);
    if (f < u) {
      return l * (f / u / s + 1 / a - 1 / a) * u * s;
    }
    if ((e = (r = (1 + s / a) * f) - (r - f)) > c || e != e) {
      return Infinity * l;
    }
    return l * e;
  };
