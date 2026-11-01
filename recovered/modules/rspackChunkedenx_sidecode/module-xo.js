function n(t, e, r, n, o, i, a) {
  try {
    var s = t[i](a);
    var u = s.value;
  } catch (error) {
    r(error);
    return;
  }
  if (s.done) {
    e(u);
  } else {
    Promise.resolve(u).then(n, o);
  }
}
export function _(t) {
  return function () {
    const e = this;
    const r = arguments;
    return new Promise((resolve, reject) => {
      const a = t.apply(e, r);
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
