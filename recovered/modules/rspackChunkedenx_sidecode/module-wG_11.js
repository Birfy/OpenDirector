import n from "./module-F4_10.js";
export default function (t, e) {
  for (var r = n(t), o = new e(r), i = 0; i < r; i++) {
    o[i] = t[r - i - 1];
  }
  return o;
}
