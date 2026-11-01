export function A() {
  return (A = Object.assign
    ? Object.assign.bind()
    : function (e) {
        for (let t = 1; t < arguments.length; t++) {
          const r = arguments[t];
          for (const n in r) {
            if ({}.hasOwnProperty.call(r, n)) {
              e[n] = r[n];
            }
          }
        }
        return e;
      }).apply(null, arguments);
}
