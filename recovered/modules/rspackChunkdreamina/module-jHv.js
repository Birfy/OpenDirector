import { y } from "./module-c1.js";
export function r(e, t) {
  if (!t) {
    return false;
  }
  const { widthRatio, heightRatio, errorDiff } = y[e];
  const { width, height } = t;
  return Math.abs(width * heightRatio - height * widthRatio) < errorDiff;
}
