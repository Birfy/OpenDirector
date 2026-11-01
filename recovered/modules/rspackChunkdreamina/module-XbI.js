import { rotr32 } from "./module-ial.js";
export function maj32(t, e, r) {
  return (t & e) ^ (t & r) ^ (e & r);
}
export const ft_1 = function (t, e, r, i) {
  let n;
  if (t === 0) {
    return ((n = e) & r) ^ (~n & i);
  }
  if (t === 1 || t === 3) {
    return e ^ r ^ i;
  }
  if (t === 2) {
    return maj32(e, r, i);
  }
};
export const ch32 = function (t, e, r) {
  return (t & e) ^ (~t & r);
};
export const p32 = function (t, e, r) {
  return t ^ e ^ r;
};
export const s0_256 = function (t) {
  return rotr32(t, 2) ^ rotr32(t, 13) ^ rotr32(t, 22);
};
export const s1_256 = function (t) {
  return rotr32(t, 6) ^ rotr32(t, 11) ^ rotr32(t, 25);
};
export const g0_256 = function (t) {
  return rotr32(t, 7) ^ rotr32(t, 18) ^ (t >>> 3);
};
export const g1_256 = function (t) {
  return rotr32(t, 17) ^ rotr32(t, 19) ^ (t >>> 10);
};
