const toString = {}.toString;
export default Array.isArray ||
  function (Z) {
    return toString.call(Z) == "[object Array]";
  };
