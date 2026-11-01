import i from "SZS";
import r from "yMd";
export var C = (e) => {
  var { feats, generateCount } = e;
  if (feats == null ? undefined : feats.includes(r.Si.PerPiece)) {
    return generateCount;
  }
  return 1;
};
export var l = (feats) =>
  C({
    feats,
    generateCount: i.qV,
  });
