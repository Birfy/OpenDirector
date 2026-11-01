export function F(e, t) {
  const { maxLength, maxPixelNum } = t;
  if (e > 1) {
    let r = maxLength;
    let a = Math.floor(maxLength / e);
    if (r * a <= maxPixelNum) {
      return {
        width: r,
        height: a,
      };
    }
    return {
      width: (r = Math.floor((a = Math.floor(Math.sqrt(maxPixelNum / e))) * e)),
      height: a,
    };
  }
  let o = maxLength;
  let l = Math.floor(maxLength * e);
  if (l * o <= maxPixelNum) {
    return {
      width: l,
      height: o,
    };
  }
  return {
    width: (l = Math.floor((o = Math.floor(Math.sqrt(maxPixelNum / e))) * e)),
    height: o,
  };
}
