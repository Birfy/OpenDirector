export default Math.scale ||
  function (e, t, r, n, o) {
    const i = +e;
    const a = +t;
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
