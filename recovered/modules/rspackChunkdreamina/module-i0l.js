export default function (t, e) {
  if (t == null) {
    return {};
  }
  const r = {};
  for (const o in t) {
    if ({}.hasOwnProperty.call(t, o)) {
      if (e.indexOf(o) !== -1) {
        continue;
      }
      r[o] = t[o];
    }
  }
  return r;
}
