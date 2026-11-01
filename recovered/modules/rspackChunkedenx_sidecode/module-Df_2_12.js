export default Math.log10 ||
  function (J) {
    return Math.log(J) * Math.LOG10E;
  };
