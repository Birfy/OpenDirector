export default Math.log1p ||
  function (J) {
    const Q = +J;
    if (Q > -1e-8 && Q < 1e-8) {
      return Q - (Q * Q) / 2;
    }
    return Math.log(1 + Q);
  };
