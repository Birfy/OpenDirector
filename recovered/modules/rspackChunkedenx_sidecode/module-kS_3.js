import n from "./module-bV_3.js";
const s = 2 ** -52;
const a = 2 ** -23;
const u = 2 ** 127 * (2 - a);
const c = 2 ** -126;
export default Math.fround ||
  function (t) {
    let r;
    let e;
    const o = +t;
    const f = Math.abs(o);
    const h = n(o);
    if (f < c) {
      return h * (f / c / a + 1 / s - 1 / s) * c * a;
    }
    if ((e = (r = (1 + a / s) * f) - (r - f)) > u || e != e) {
      return Infinity * h;
    }
    return h * e;
  };
