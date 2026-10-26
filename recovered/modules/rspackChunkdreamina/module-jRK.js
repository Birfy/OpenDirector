import { W0 } from "./module-wTQ.js";
import { t as t_1 } from "./module-qVX.js";
import { _, f } from "./module-vSe.js";
export var cV = {
  Text2Image: "text2image",
  Image2Image: "image2image",
  ImageSuperResolution: "image_super_resolution",
  ForegroundSegmentation: "foreground_segmentation",
};
export var b2 = {
  text2image: "text2image",
  image2image: "image2image",
  image_super_resolution: "image_super_resolution",
  foreground_segmentation: "foreground_segmentation",
};
const d = new Set([
  "text2image",
  "image2image",
  "image_super_resolution",
  "foreground_segmentation",
]);
export function Lk(e) {
  const t = t_1(e);
  if (t !== null) {
    return d.has(t);
  }
  return _(e.toolName, f(e), [], W0);
}
