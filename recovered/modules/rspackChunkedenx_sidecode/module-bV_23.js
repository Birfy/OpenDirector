export default Math.sign ||
  function (t) {
    const r = +t;
    if (r === 0 || r != r) {
      return r;
    }
    if (r < 0) {
      return -1;
    }
    return 1;
  };
