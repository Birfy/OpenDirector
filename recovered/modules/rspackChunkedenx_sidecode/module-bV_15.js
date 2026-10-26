export default Math.sign ||
  function (r) {
    const t = +r;
    if (t === 0 || t != t) {
      return t;
    }
    if (t < 0) {
      return -1;
    }
    return 1;
  };
