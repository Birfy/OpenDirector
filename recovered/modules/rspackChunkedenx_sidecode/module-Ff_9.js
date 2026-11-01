export default Object.is ||
  function (t, e) {
    if (t === e) {
      return t !== 0 || 1 / t == 1 / e;
    }
    return t != t && e != e;
  };
