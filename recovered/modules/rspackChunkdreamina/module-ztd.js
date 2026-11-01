import { $ } from "./module-sXJ.js";
export function H(e, t, r) {
  const { width, height } = e;
  const { width: width_1, height: height_1 } = t;
  const { width: width_2, height: height_2 } = $({
    paintWidth: width,
    paintHeight: height,
    imageWidth: width_1,
    imageHeight: height_1,
  });
  return {
    width: width_2 * r,
    height: height_2 * r,
  };
}
