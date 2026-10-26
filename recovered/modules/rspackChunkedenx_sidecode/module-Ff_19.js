export default Object.is ||
  function (r, t) {
    if (r === t) {
      return r !== 0 || 1 / r == 1 / t;
    }
    return r != r && t != t;
  };
