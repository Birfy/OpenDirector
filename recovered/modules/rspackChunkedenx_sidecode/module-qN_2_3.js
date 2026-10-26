import n from "./module-d_4.js";
export default function () {
  const t = n(this);
  let r = "";
  if (t.hasIndices) {
    r += "d";
  }
  if (t.global) {
    r += "g";
  }
  if (t.ignoreCase) {
    r += "i";
  }
  if (t.multiline) {
    r += "m";
  }
  if (t.dotAll) {
    r += "s";
  }
  if (t.unicode) {
    r += "u";
  }
  if (t.unicodeSets) {
    r += "v";
  }
  if (t.sticky) {
    r += "y";
  }
  return r;
}
