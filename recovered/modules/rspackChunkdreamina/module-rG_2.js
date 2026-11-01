import n from "./module-OG_2.js";
export default function (e, t) {
  for (var r = n(e), o = new t(r), i = 0; i < r; i++) {
    o[i] = e[r - i - 1];
  }
  return o;
}
