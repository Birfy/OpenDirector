export function zero2(J) {
  if (J.length === 1) {
    return "0" + J;
  }
  return J;
}
export function toHex(J) {
  let Z = "";
  for (let $ = 0; $ < J.length; $++) {
    Z += zero2(J[$].toString(16));
  }
  return Z;
}
export const toArray = function (J, Z) {
  if (Array.isArray(J)) {
    return J.slice();
  }
  if (!J) {
    return [];
  }
  const Q = [];
  if (typeof J !== "string") {
    for (var $ = 0; $ < J.length; $++) {
      Q[$] = 0 | J[$];
    }
    return Q;
  }
  if (Z === "hex") {
    if ((J = J.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0) {
      J = "0" + J;
    }
    for (var $ = 0; $ < J.length; $ += 2) {
      Q.push(parseInt(J[$] + J[$ + 1], 16));
    }
  } else {
    for (var $ = 0; $ < J.length; $++) {
      const tt = J.charCodeAt($);
      const te = tt >> 8;
      const tr = 255 & tt;
      if (te) {
        Q.push(te, tr);
      } else {
        Q.push(tr);
      }
    }
  }
  return Q;
};
export const encode = function (J, Z) {
  if (Z === "hex") {
    return toHex(J);
  }
  return J;
};
