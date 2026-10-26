export default Math.trunc ||
  function (t) {
    const n = +t;
    return (n > 0 ? Math.floor : Math.ceil)(n);
  };
