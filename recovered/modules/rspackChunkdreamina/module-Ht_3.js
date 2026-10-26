export function zero2(Z) {
  if (Z.length === 1) {
    return "0" + Z;
  }
  return Z;
}
export function toHex(Z) {
  let Q = "";
  for (let $ = 0; $ < Z.length; $++) {
    Q += zero2(Z[$].toString(16));
  }
  return Q;
}
export const toArray = function (Z, Q) {
  if (Array.isArray(Z)) {
    return Z.slice();
  }
  if (!Z) {
    return [];
  }
  const X = [];
  if (typeof Z !== "string") {
    for (var $ = 0; $ < Z.length; $++) {
      X[$] = 0 | Z[$];
    }
    return X;
  }
  if (Q === "hex") {
    if ((Z = Z.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0) {
      Z = "0" + Z;
    }
    for (var $ = 0; $ < Z.length; $ += 2) {
      X.push(parseInt(Z[$] + Z[$ + 1], 16));
    }
  } else {
    for (var $ = 0; $ < Z.length; $++) {
      const ee = Z.charCodeAt($);
      const et = ee >> 8;
      const er = 255 & ee;
      if (et) {
        X.push(et, er);
      } else {
        X.push(er);
      }
    }
  }
  return X;
};
export const encode = function (Z, Q) {
  if (Q === "hex") {
    return toHex(Z);
  }
  return Z;
};
