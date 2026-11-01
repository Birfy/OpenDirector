export default Object.is ||
  function (t, r) {
    if (t === r) {
      return t !== 0 || 1 / t == 1 / r;
    }
    return t != t && r != r;
  };
