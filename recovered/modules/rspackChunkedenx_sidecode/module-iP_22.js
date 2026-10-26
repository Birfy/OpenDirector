export default Math.scale ||
  function (t, r, e, n, o) {
    const i = +t;
    const a = +r;
    const s = +e;
    const c = +n;
    const u = +o;
    if (i != i || a != a || s != s || c != c || u != u) {
      return 0 / 0;
    }
    if (Infinity === i || -Infinity === i) {
      return i;
    }
    return ((i - a) * (u - c)) / (s - a) + c;
  };
