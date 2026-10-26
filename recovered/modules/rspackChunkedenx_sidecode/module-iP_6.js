export default Math.scale ||
  function (t, r, e, n, i) {
    const o = +t;
    const s = +r;
    const a = +e;
    const u = +n;
    const c = +i;
    if (o != o || s != s || a != a || u != u || c != c) {
      return 0 / 0;
    }
    if (Infinity === o || -Infinity === o) {
      return o;
    }
    return ((o - s) * (c - u)) / (a - s) + u;
  };
