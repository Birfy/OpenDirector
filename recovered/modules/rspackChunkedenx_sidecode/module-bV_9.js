export default Math.sign ||
  function (t) {
    const e = +t;
    if (e === 0 || e != e) {
      return e;
    }
    if (e < 0) {
      return -1;
    }
    return 1;
  };
