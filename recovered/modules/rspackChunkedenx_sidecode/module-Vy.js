export const toByteArray = function (J) {
  let Z;
  let Q;
  const te = ti(J);
  const tr = te[0];
  const tn = te[1];
  const to = new tt(((tr + tn) * 3) / 4 - tn);
  let ta = 0;
  const ts = tn > 0 ? tr - 4 : tr;
  for (Q = 0; Q < ts; Q += 4) {
    Z =
      ($[J.charCodeAt(Q)] << 18) |
      ($[J.charCodeAt(Q + 1)] << 12) |
      ($[J.charCodeAt(Q + 2)] << 6) |
      $[J.charCodeAt(Q + 3)];
    to[ta++] = (Z >> 16) & 255;
    to[ta++] = (Z >> 8) & 255;
    to[ta++] = 255 & Z;
  }
  if (tn === 2) {
    Z = ($[J.charCodeAt(Q)] << 2) | ($[J.charCodeAt(Q + 1)] >> 4);
    to[ta++] = 255 & Z;
  }
  if (tn === 1) {
    Z =
      ($[J.charCodeAt(Q)] << 10) |
      ($[J.charCodeAt(Q + 1)] << 4) |
      ($[J.charCodeAt(Q + 2)] >> 2);
    to[ta++] = (Z >> 8) & 255;
    to[ta++] = 255 & Z;
  }
  return to;
};
export const fromByteArray = function (J) {
  let Z;
  const J_length = J.length;
  const tt = J_length % 3;
  const te = [];
  for (let tr = 0, tn = J_length - tt; tr < tn; tr += 16383) {
    te.push(
      ((J, Z, $) => {
        let tt;
        const te = [];
        for (let tr = Z; tr < $; tr += 3) {
          tt =
            ((J[tr] << 16) & 16711680) +
            ((J[tr + 1] << 8) & 65280) +
            (255 & J[tr + 2]);
          te.push(
            Q[(tt >> 18) & 63] +
              Q[(tt >> 12) & 63] +
              Q[(tt >> 6) & 63] +
              Q[63 & tt],
          );
        }
        return te.join("");
      })(J, tr, tr + 16383 > tn ? tn : tr + 16383),
    );
  }
  if (tt === 1) {
    te.push(`${Q[(Z = J[J_length - 1]) >> 2] + Q[(Z << 4) & 63]}==`);
  } else if (tt === 2) {
    te.push(
      `${Q[(Z = (J[J_length - 2] << 8) + J[J_length - 1]) >> 10] + Q[(Z >> 4) & 63] + Q[(Z << 2) & 63]}=`,
    );
  }
  return te.join("");
};
var Q = [];
var $ = [];
var tt = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
const te = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (let tr = 0, tn = te.length; tr < tn; ++tr) {
  Q[tr] = te[tr];
  $[te.charCodeAt(tr)] = tr;
}
function ti(J) {
  const J_length = J.length;
  if (J_length % 4 > 0) {
    throw Error("Invalid string. Length must be a multiple of 4");
  }
  let Q = J.indexOf("=");
  if (Q === -1) {
    Q = J_length;
  }
  const $ = Q === J_length ? 0 : 4 - (Q % 4);
  return [Q, $];
}
$[45] = 62;
$[95] = 63;
