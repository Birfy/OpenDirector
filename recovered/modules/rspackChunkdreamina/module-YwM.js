export function _() {
  return (_ =
    Object.assign ||
    function (e) {
      for (let t = 1; t < arguments.length; t++) {
        const r = arguments[t];
        for (const n in r) {
          if (Object.prototype.hasOwnProperty.call(r, n)) {
            e[n] = r[n];
          }
        }
      }
      return e;
    }).apply(this, arguments);
}
