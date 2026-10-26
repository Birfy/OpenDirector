export function _(t) {
  for (let e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    let n = Object.keys(r);
    if (typeof Object.getOwnPropertySymbols === "function") {
      n = n.concat(
        Object.getOwnPropertySymbols(r).filter(
          (t) => Object.getOwnPropertyDescriptor(r, t).enumerable,
        ),
      );
    }
    n.forEach((e) => {
      let n;
      n = r[e];
      if (e in t) {
        Object.defineProperty(t, e, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true,
        });
      } else {
        t[e] = n;
      }
    });
  }
  return t;
}
