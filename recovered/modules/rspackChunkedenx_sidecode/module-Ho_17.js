export default Math.log1p ||
  function (t) {
    const e = +t;
    if (e > -1e-8 && e < 1e-8) {
      return e - (e * e) / 2;
    }
    return Math.log(1 + e);
  };
