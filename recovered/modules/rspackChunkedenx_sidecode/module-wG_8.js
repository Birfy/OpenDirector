import n from "./module-F4_7.js";
export default function (t, r) {
  for (var e = n(t), o = new r(e), a = 0; a < e; a++) {
    o[a] = t[e - a - 1];
  }
  return o;
}
