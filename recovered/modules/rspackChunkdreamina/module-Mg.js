import n from "Ut";
import { L3, Uu } from "./module-Tc1.js";
function o(e) {
  if (e) {
    const t = new n.DALipSyncFaceDetail();
    t.faceBbox = [...e.faceBbox];
    t.faceImage = e.faceImage ? L3(e.faceImage) : undefined;
    t.maskImage = e.maskImage ? L3(e.maskImage) : undefined;
    return t;
  }
}
export { o };
export function t(e, t) {
  if (e) {
    const faceBbox = [
      e.faceBbox[0] || 0,
      e.faceBbox[1] || 0,
      e.faceBbox[2] || 0,
      e.faceBbox[3] || 0,
    ];
    const faceImage = e.faceImage ? Uu(e.faceImage, t) : undefined;
    const maskImage = e.maskImage ? Uu(e.maskImage, t) : undefined;
    if (faceImage && maskImage) {
      return {
        faceBbox,
        faceImage,
        maskImage,
      };
    }
  }
}
