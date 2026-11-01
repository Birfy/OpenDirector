export default Math.log10 ||
  function (e) {
    return Math.log(e) * Math.LOG10E;
  };
