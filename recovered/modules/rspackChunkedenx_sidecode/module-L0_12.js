export const _reverse = function (J) {
  const Z = {};
  Object.keys(J).forEach((Q) => {
    if ((0 | Q) == Q) {
      Q |= 0;
    }
    Z[J[Q]] = Q;
  });
  return Z;
};
export const der = require("./module-WX.js");
