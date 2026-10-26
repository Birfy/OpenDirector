import $ from "./module-V6_13.js";
export default function (J, Z) {
  const Q = $(J);
  if (Q < 0) {
    return Math.max(Q + Z, 0);
  }
  return Math.min(Q, Z);
}
