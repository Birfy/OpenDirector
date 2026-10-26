export function A(e, t) {
  return (A = Object.setPrototypeOf
    ? Object.setPrototypeOf.bind()
    : function (e, t) {
        e.__proto__ = t;
        return e;
      })(e, t);
}
