import { M } from "./module-lRe.js";
import { h } from "./module-z8f.js";
import { b } from "./module-BwB.js";
export function j(e, t, i) {
  if (new Set(i.acceptedResourceTypes).has(t.materialType)) {
    if (t.materialType === "image" && t.imageInfo) {
      return h(e, t.imageInfo);
    }
    if (t.materialType === "video" && t.videoInfo) {
      return b(e, t.videoInfo);
    }
    if (t.materialType === "audio" && t.audioInfo) {
      return M(e, t.audioInfo);
    }
  }
}
