export function A() {
  const t = [];
  for (let e = 0; e < arguments.length; e++) {
    t[e] = arguments[e];
  }
  const i = t.filter(Boolean);
  if (i.length <= 1) {
    return i[0] || null;
  }
  return function (t) {
    i.forEach((e) => {
      if (typeof e === "function") {
        e(t);
      } else if (e) {
        e.current = t;
      }
    });
  };
}
