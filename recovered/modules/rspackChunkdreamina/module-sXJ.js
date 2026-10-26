import i from "Hp";
function a(e, t) {
  if (isNaN(e)) {
    return t;
  }
  return e;
}
export function $(e) {
  const { paintWidth, paintHeight, imageWidth, imageHeight, fitMode } = e;
  if (fitMode === i.j.CenterCrop) {
    return {
      scale: 1,
      width: Math.round(paintWidth),
      height: Math.round(paintHeight),
    };
  }
  const m = paintWidth / paintHeight;
  const l = imageWidth / imageHeight;
  if (l === m) {
    return {
      scale: paintWidth / imageWidth,
      width: Math.round(paintWidth),
      height: Math.round(paintHeight),
    };
  }
  if (l > m) {
    return {
      scale: paintWidth / imageWidth,
      width: Math.round(paintWidth),
      height: Math.round(paintWidth / l),
    };
  }
  return {
    scale: a(paintHeight / imageHeight, 1),
    width: Math.round(a(paintHeight * l, 0)),
    height: Math.round(a(paintHeight, 0)),
  };
}
