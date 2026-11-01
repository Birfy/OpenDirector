if (require.j == "wl4") var a = require("./module-Vj_2.js");
export function I(e, t) {
  let r = setTimeout(() => {
    e();
  }, t);
  return a.IZ(() => clearTimeout(r));
}
