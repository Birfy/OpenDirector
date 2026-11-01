export default Math.sign ||
  function (J) {
    const Z = +J;
    if (Z === 0 || Z != Z) {
      return Z;
    }
    if (Z < 0) {
      return -1;
    }
    return 1;
  };
