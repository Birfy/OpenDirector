function n(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
export function f(e) {
  if (e instanceof Map) {
    t = [...e.entries()];
  } else if (n(e)) {
    t = Object.entries(e);
  } else if (typeof e === "string") {
    try {
      var t;
      const i = JSON.parse(e);
      t = n(i) ? Object.entries(i) : undefined;
    } catch (e) {
      t = undefined;
    }
  }
  if (t) {
    const r = t.reduce((acc, item) => {
      var [i, n] = item;
      if (n != null) {
        acc[String(i)] = String(n);
      }
      return acc;
    }, {});
    if (Object.keys(r).length > 0) {
      return r;
    }
    return undefined;
  }
}
export function T(e, t, i) {
  let n;
  if ((n = e[t]) != null) {
    return n;
  }
  return e[i];
}
