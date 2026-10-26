export default Math.log10 ||
  function (r) {
    return Math.log(r) * Math.LOG10E;
  };
