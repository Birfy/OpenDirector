import $ from "./module-wL_12.js";
const te = function (J, Z) {
  const J_length = J.length;
  const ti = Math.floor(J_length / 2);
  if (J_length < 8) {
    return tr(J, Z);
  }
  return tn(J, te($(J, 0, ti), Z), te($(J, ti), Z), Z);
};
var tr = (J, Z) => {
  let Q;
  let $;
  for (let tt = J.length, te = 1; te < tt;) {
    $ = te;
    for (Q = J[te]; $ && Z(J[$ - 1], Q) > 0;) {
      J[$] = J[--$];
    }
    if ($ !== te++) {
      J[$] = Q;
    }
  }
  return J;
};
var tn = (J, Z, Q, $) => {
  for (let tt = Z.length, te = Q.length, tr = 0, tn = 0; tr < tt || tn < te;) {
    J[tr + tn] =
      tr < tt && tn < te
        ? $(Z[tr], Q[tn]) <= 0
          ? Z[tr++]
          : Q[tn++]
        : tr < tt
          ? Z[tr++]
          : Q[tn++];
  }
  return J;
};
export default te;
