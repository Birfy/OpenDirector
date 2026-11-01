export const _reverse = function (t) {
  const e = {};
  Object.keys(t).forEach((r) => {
    if ((0 | r) == r) {
      r |= 0;
    }
    e[t[r]] = r;
  });
  return e;
};
export const der = require("./module-tcj.js");
