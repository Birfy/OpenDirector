export default Math.trunc ||
  function (e) {
    const n = +e;
    return (n > 0 ? Math.floor : Math.ceil)(n);
  };
