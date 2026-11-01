require.d(exports, {
  C: () =>
    function e(t, n, r = " ") {
      let o = String(t);
      if (!n) {
        return o;
      }
      let i = o.length < n ? `${r}${o}` : o;
      if (i.length < n) {
        return e(i, n, r);
      }
      return i;
    },
});
