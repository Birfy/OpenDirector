export default Math.scale ||
  function (t, r, e, n, o) {
    const a = +t;
    const i = +r;
    const s = +e;
    const c = +n;
    const u = +o;
    if (a != a || i != i || s != s || c != c || u != u) {
      return 0 / 0;
    }
    if (Infinity === a || -Infinity === a) {
      return a;
    }
    return ((a - i) * (u - c)) / (s - i) + c;
  };
