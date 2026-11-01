import n from "Ut";
import { N, a } from "./module-y3V.js";
import { X } from "./module-NaK.js";
import { l as l_1 } from "./module-wVp.js";
export function q(e) {
  if (e) {
    let t;
    let i;
    const o = new n.DAVideoGenVideoTemplate();
    o.enable = true;
    const r = new n.DAImageResource();
    r.sourceFrom = n.DAResourceSourceFrom.upload;
    r.platformType = n.DAImageResourcePlatformType.imageX;
    r.uri = (t = e.imageInfo) == null ? undefined : t.imageUri;
    if ((i = e.imageInfo) == null ? undefined : i.aigcImage) {
      const l = new n.DAAIGCImage();
      l.itemId = e.imageInfo.aigcImage.itemId;
      r.aigcImage = l;
      r.sourceFrom = n.DAResourceSourceFrom.produced;
    }
    o.imageInfo = r;
    o.videoTemplate = e.videoTemplateItemId;
    o.videoInfo = a(e.videoInfo);
    return o;
  }
}
function d(e, t, i) {
  if (e) {
    let n;
    let l;
    const imageInfo = X(e.imageInfo, t);
    const u = N(e.videoInfo, t);
    if (imageInfo) {
      const videoTemplateItem = (n = l_1(e, t)) != null ? n : i;
      const videoInfo =
        u || (videoTemplateItem == null ? undefined : videoTemplateItem.video);
      return {
        enable: (l = e.enable) == null || l,
        videoTemplateItemId: e.videoTemplate
          ? String(e.videoTemplate)
          : undefined,
        imageInfo,
        videoInfo,
        videoTemplateItem,
      };
    }
  }
}
export { d as n };
