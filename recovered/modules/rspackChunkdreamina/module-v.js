export default Math.sign ||
  function (e) {
    const t = +e;
    if (t === 0 || t != t) {
      return t;
    }
    if (t < 0) {
      return -1;
    }
    return 1;
  };
