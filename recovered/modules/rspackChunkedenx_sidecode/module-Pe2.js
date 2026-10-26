import { rotr32 } from "./module-IMF.js";
export function maj32(J, Z, Q) {
  return (J & Z) ^ (J & Q) ^ (Z & Q);
}
export const ft_1 = function (J, Z, Q, $) {
  let te;
  if (J === 0) {
    return ((te = Z) & Q) ^ (~te & $);
  }
  if (J === 1 || J === 3) {
    return Z ^ Q ^ $;
  }
  if (J === 2) {
    return maj32(Z, Q, $);
  }
};
export const ch32 = function (J, Z, Q) {
  return (J & Z) ^ (~J & Q);
};
export const p32 = function (J, Z, Q) {
  return J ^ Z ^ Q;
};
export const s0_256 = function (J) {
  return rotr32(J, 2) ^ rotr32(J, 13) ^ rotr32(J, 22);
};
export const s1_256 = function (J) {
  return rotr32(J, 6) ^ rotr32(J, 11) ^ rotr32(J, 25);
};
export const g0_256 = function (J) {
  return rotr32(J, 7) ^ rotr32(J, 18) ^ (J >>> 3);
};
export const g1_256 = function (J) {
  return rotr32(J, 17) ^ rotr32(J, 19) ^ (J >>> 10);
};
