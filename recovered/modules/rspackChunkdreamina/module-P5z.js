export default function (t, e) {
  if (e == null || e > t.length) {
    e = t.length;
  }
  for (var r = 0, o = Array(e); r < e; r++) {
    o[r] = t[r];
  }
  return o;
}
