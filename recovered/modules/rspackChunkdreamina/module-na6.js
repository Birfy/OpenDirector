import o from "./module-i0l.js";
export default function (t, e) {
  if (t == null) {
    return {};
  }
  let r;
  let n;
  const i = o(t, e);
  if (Object.getOwnPropertySymbols) {
    const u = Object.getOwnPropertySymbols(t);
    for (n = 0; n < u.length; n++) {
      r = u[n];
      if (e.indexOf(r) === -1 && {}.propertyIsEnumerable.call(t, r)) {
        i[r] = t[r];
      }
    }
  }
  return i;
}
