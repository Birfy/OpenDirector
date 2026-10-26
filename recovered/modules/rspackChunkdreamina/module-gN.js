export default function (Z, Q) {
  if ($("noDeprecation")) {
    return Z;
  }
  let X = false;
  return function () {
    if (!X) {
      if ($("throwDeprecation")) {
        throw Error(Q);
      }
      if ($("traceDeprecation")) {
        console.trace(Q);
      } else {
        console.warn(Q);
      }
      X = true;
    }
    return Z.apply(this, arguments);
  };
}
function $(Z) {
  try {
    if (!global.localStorage) {
      return false;
    }
  } catch (Z) {
    return false;
  }
  const Q = global.localStorage[Z];
  return Q != null && String(Q).toLowerCase() === "true";
}
