if (require.j == "wl4") var a = require("./module-Or_4.js");
export const o = (e, t, r) => {
  let o;
  let i = (o = e.toUpperCase()) === "YEAR" || (t === 12 && o === "MONTH");
  if (r === "auto") {
    if (i) {
      return a.cl.yearly;
    }
    return a.cl.monthly;
  }
  if (i) {
    return a.cl.oneYear;
  }
  return a.cl.oneMonth;
};
