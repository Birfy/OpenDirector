function e(t, e, r, o, n, i, u) {
  try {
    var s = t[i](u);
    var a = s.value;
  } catch (error) {
    return void r(error);
  }
  if (s.done) {
    e(a);
  } else {
    Promise.resolve(a).then(o, n);
  }
}
export default function (t) {
  return function () {
    const r = this;
    const o = arguments;
    return new Promise((resolve, reject) => {
      const u = t.apply(r, o);
      function s(t) {
        e(u, resolve, reject, s, a, "next", t);
      }
      function a(t) {
        e(u, resolve, reject, s, a, "throw", t);
      }
      s(undefined);
    });
  };
}
