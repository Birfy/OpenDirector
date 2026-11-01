export default Math.log1p ||
  function (t) {
    const r = +t;
    if (r > -1e-8 && r < 1e-8) {
      return r - (r * r) / 2;
    }
    return Math.log(1 + r);
  };
