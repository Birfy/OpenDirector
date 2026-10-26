function n(t, e, r, n, i, a, o) {
  try {
    var s = t[a](o);
    var A = s.value;
  } catch (error) {
    r(error);
    return;
  }
  if (s.done) {
    e(A);
  } else {
    Promise.resolve(A).then(n, i);
  }
}
export function _(t) {
  return function () {
    const e = this;
    const r = arguments;
    return new Promise((resolve, reject) => {
      const o = t.apply(e, r);
      function s(t) {
        n(o, resolve, reject, s, A, "next", t);
      }
      function A(t) {
        n(o, resolve, reject, s, A, "throw", t);
      }
      s(undefined);
    });
  };
}
