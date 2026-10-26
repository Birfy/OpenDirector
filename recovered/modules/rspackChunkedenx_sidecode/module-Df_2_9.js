export default Math.log10 ||
  function (t) {
    return Math.log(t) * Math.LOG10E;
  };
