import a from "c1";
function r(e, t) {
  if (!t) {
    return false;
  }
  const { widthRatio, heightRatio, errorDiff } = a.y[e];
  const { width, height } = t;
  return Math.abs(width * heightRatio - height * widthRatio) < errorDiff;
}
export { r };
