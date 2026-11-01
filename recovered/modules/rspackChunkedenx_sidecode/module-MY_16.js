export default Math.trunc ||
  function (r) {
    const n = +r;
    return (n > 0 ? Math.floor : Math.ceil)(n);
  };
