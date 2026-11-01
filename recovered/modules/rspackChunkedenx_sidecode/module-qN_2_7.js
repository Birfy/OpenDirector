import n from "./module-d_8.js";
export default function () {
  const r = n(this);
  let t = "";
  if (r.hasIndices) {
    t += "d";
  }
  if (r.global) {
    t += "g";
  }
  if (r.ignoreCase) {
    t += "i";
  }
  if (r.multiline) {
    t += "m";
  }
  if (r.dotAll) {
    t += "s";
  }
  if (r.unicode) {
    t += "u";
  }
  if (r.unicodeSets) {
    t += "v";
  }
  if (r.sticky) {
    t += "y";
  }
  return t;
}
