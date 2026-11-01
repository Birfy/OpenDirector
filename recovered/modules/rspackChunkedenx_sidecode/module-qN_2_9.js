import n from "./module-d_10.js";
export default function () {
  const t = n(this);
  let e = "";
  if (t.hasIndices) {
    e += "d";
  }
  if (t.global) {
    e += "g";
  }
  if (t.ignoreCase) {
    e += "i";
  }
  if (t.multiline) {
    e += "m";
  }
  if (t.dotAll) {
    e += "s";
  }
  if (t.unicode) {
    e += "u";
  }
  if (t.unicodeSets) {
    e += "v";
  }
  if (t.sticky) {
    e += "y";
  }
  return e;
}
