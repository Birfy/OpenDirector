export default function (J, Z) {
  if ($("noDeprecation")) {
    return J;
  }
  let Q = false;
  return function () {
    if (!Q) {
      if ($("throwDeprecation")) {
        throw Error(Z);
      }
      if ($("traceDeprecation")) {
        console.trace(Z);
      } else {
        console.warn(Z);
      }
      Q = true;
    }
    return J.apply(this, arguments);
  };
}
function $(J) {
  try {
    if (!global.localStorage) {
      return false;
    }
  } catch (J) {
    return false;
  }
  const Z = global.localStorage[J];
  return Z != null && String(Z).toLowerCase() === "true";
}
