import i from "Ut";
import r from "SZS";
export var H = (e, t, a) => {
  if (!t || !a || !(e in t)) {
    return r.Pn[i.DAImageRatioType.ImageRatioType_11];
  }
  var n = t[e];
  if (!(n == null ? undefined : n.imageRatioSizes)) {
    return r.Pn[a];
  }
  var o = n.imageRatioSizes.find((e) => e.ratioType === a);
  if ((o == null ? undefined : o.width) && (o == null ? undefined : o.height)) {
    return {
      width: o.width,
      height: o.height,
    };
  }
  return r.Pn[a];
};
