import n from "./module-F4_20.js";
export default function (r, t) {
  for (var e = n(r), o = new t(e), i = 0; i < e; i++) {
    o[i] = r[e - i - 1];
  }
  return o;
}
