function e(r) {
  e = Object.setPrototypeOf
    ? Object.getPrototypeOf.bind()
    : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      };
  e.default = e;
  return e(r);
}
export { e as default };
e.default = e;
