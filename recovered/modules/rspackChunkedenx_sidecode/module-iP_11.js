export default Math.scale ||
  function (t, e, r, n, o) {
    const i = +t;
    const a = +e;
    const s = +r;
    const u = +n;
    const c = +o;
    if (i != i || a != a || s != s || u != u || c != c) {
      return 0 / 0;
    }
    if (Infinity === i || -Infinity === i) {
      return i;
    }
    return ((i - a) * (c - u)) / (s - a) + u;
  };
