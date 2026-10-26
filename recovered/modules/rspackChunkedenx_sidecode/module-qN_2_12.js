import $ from "./module-d_13.js";
export default function () {
  const J = $(this);
  let Z = "";
  if (J.hasIndices) {
    Z += "d";
  }
  if (J.global) {
    Z += "g";
  }
  if (J.ignoreCase) {
    Z += "i";
  }
  if (J.multiline) {
    Z += "m";
  }
  if (J.dotAll) {
    Z += "s";
  }
  if (J.unicode) {
    Z += "u";
  }
  if (J.unicodeSets) {
    Z += "v";
  }
  if (J.sticky) {
    Z += "y";
  }
  return Z;
}
