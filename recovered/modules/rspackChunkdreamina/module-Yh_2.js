export function zu(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
export function wK(e) {
  if (zu(e)) {
    return e;
  }
  if (typeof e === "string") {
    try {
      const t = JSON.parse(e);
      if (zu(t)) {
        return t;
      }
      return undefined;
    } catch (e) {
      return;
    }
  }
}
function a(e, t) {
  if (e) {
    return Reflect.get(e, t);
  }
}
export function Yt(e) {
  for (
    var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), n = 1;
    n < t;
    n++
  ) {
    i[n - 1] = arguments[n];
  }
  for (const r of i) {
    const o = a(e, r);
    if (typeof o === "string" && o) {
      return o;
    }
  }
}
export function v8(e) {
  for (
    var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), n = 1;
    n < t;
    n++
  ) {
    i[n - 1] = arguments[n];
  }
  for (const r of i) {
    const o = a(e, r);
    if (o != null) {
      return String(o);
    }
  }
}
export function CC(e) {
  for (
    var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), n = 1;
    n < t;
    n++
  ) {
    i[n - 1] = arguments[n];
  }
  for (const r of i) {
    const o = a(e, r);
    if (typeof o === "number" && Number.isFinite(o)) {
      return o;
    }
  }
}
