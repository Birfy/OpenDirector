import a from "yMd";
export function o(scene, e, i) {
  let r;
  const format =
    arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "webp";
  const width = Math.round(e);
  const height = Math.round(i);
  return {
    scene,
    width,
    height,
    uniqKey:
      (r = {
        scene,
        width,
        height,
        format,
      }).scene === a.Qg.Normal || r.scene === a.Qg.Loss
        ? "".concat(r.width)
        : "".concat(r.scene, "-w:").concat(r.width, "-h:").concat(r.height),
    format,
  };
}
