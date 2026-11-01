function n(t, r, e, n, o, i, a) {
  try {
    var s = t[i](a);
    var u = s.value;
  } catch (error) {
    e(error);
    return;
  }
  if (s.done) {
    r(u);
  } else {
    Promise.resolve(u).then(n, o);
  }
}
export function _(t) {
  return function () {
    const r = this;
    const e = arguments;
    return new Promise((resolve, reject) => {
      const a = t.apply(r, e);
      function s(t) {
        n(a, resolve, reject, s, u, "next", t);
      }
      function u(t) {
        n(a, resolve, reject, s, u, "throw", t);
      }
      s(undefined);
    });
  };
}
