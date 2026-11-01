function e() {
  e = Object.assign
    ? Object.assign.bind()
    : function (t) {
        for (let e = 1; e < arguments.length; e++) {
          const r = arguments[e];
          for (const o in r) {
            if ({}.hasOwnProperty.call(r, o)) {
              t[o] = r[o];
            }
          }
        }
        return t;
      };
  e.default = e;
  return e.apply(null, arguments);
}
export { e as default };
e.default = e;
