function e(r, o) {
  e = Object.setPrototypeOf
    ? Object.setPrototypeOf.bind()
    : function (t, e) {
        t.__proto__ = e;
        return t;
      };
  e.default = e;
  return e(r, o);
}
export { e as default };
e.default = e;
