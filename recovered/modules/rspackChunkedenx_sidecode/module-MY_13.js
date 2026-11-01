export default Math.trunc ||
  function (J) {
    const $ = +J;
    return ($ > 0 ? Math.floor : Math.ceil)($);
  };
