const hasOwnProperty = Object.prototype.hasOwnProperty;
const propertyIsEnumerable = Object.prototype.propertyIsEnumerable;
export default !(() => {
  try {
    if (!Object.assign) {
      return false;
    }
    const t = new String("abc");
    t[5] = "de";
    if (Object.getOwnPropertyNames(t)[0] === "5") {
      return false;
    }
    const e = {};
    for (let r = 0; r < 10; r++) {
      e["_" + String.fromCharCode(r)] = r;
    }
    const n = Object.getOwnPropertyNames(e).map((t) => e[t]);
    if (n.join("") !== "0123456789") {
      return false;
    }
    const i = {};
    "abcdefghijklmnopqrst".split("").forEach((t) => {
      i[t] = t;
    });
    if (
      Object.keys({
        ...i,
      }).join("") !== "abcdefghijklmnopqrst"
    ) {
      return false;
    }
    return true;
  } catch (t) {
    return false;
  }
})()
  ? function (t, i) {
      let a;
      let o;
      const s = ((t) => {
        if (t == null) {
          throw TypeError(
            "Object.assign cannot be called with null or undefined",
          );
        }
        return Object(t);
      })(t);
      for (let A = 1; A < arguments.length; A++) {
        for (const c in (a = Object(arguments[A]))) {
          if (hasOwnProperty.call(a, c)) {
            s[c] = a[c];
          }
        }
        if (Object.getOwnPropertySymbols) {
          o = Object.getOwnPropertySymbols(a);
          for (let u = 0; u < o.length; u++) {
            if (propertyIsEnumerable.call(a, o[u])) {
              s[o[u]] = a[o[u]];
            }
          }
        }
      }
      return s;
    }
  : Object.assign;
