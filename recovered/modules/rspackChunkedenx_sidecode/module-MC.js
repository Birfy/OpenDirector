const toString = {}.toString;
export default Array.isArray ||
  function (J) {
    return toString.call(J) == "[object Array]";
  };
