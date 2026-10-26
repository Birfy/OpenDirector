import n from "./module-bV_6.js";
const i = 2 ** -52;
const s = 2 ** -23;
const c = 2 ** 127 * (2 - s);
const u = 2 ** -126;
export default Math.fround ||
  function (t) {
    let r;
    let e;
    const a = +t;
    const f = Math.abs(a);
    const l = n(a);
    if (f < u) {
      return l * (f / u / s + 1 / i - 1 / i) * u * s;
    }
    if ((e = (r = (1 + s / i) * f) - (r - f)) > c || e != e) {
      return Infinity * l;
    }
    return l * e;
  };
