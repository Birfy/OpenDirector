export default Object.is ||
  function (J, Z) {
    if (J === Z) {
      return J !== 0 || 1 / J == 1 / Z;
    }
    return J != J && Z != Z;
  };
