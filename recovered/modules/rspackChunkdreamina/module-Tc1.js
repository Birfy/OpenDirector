import n from "Ut";
import { W, j } from "./module-po.js";
export function $n(e) {
  if (e == null ? undefined : e.aigcImage) {
    return n.DAResourceSourceFrom.produced;
  }
  return n.DAResourceSourceFrom.upload;
}
export function L3(e, t) {
  if (e) {
    let i;
    let o;
    let r;
    const l = new n.DAImageResource();
    l.sourceFrom = t != null ? t : n.DAResourceSourceFrom.upload;
    l.platformType = n.DAImageResourcePlatformType.imageX;
    l.uri = e.imageUri;
    l.width = (i = e.width) != null ? i : 0;
    l.height = (o = e.height) != null ? o : 0;
    l.format = (r = e.format) != null ? r : "";
    if (e.aigcImage) {
      const d = new n.DAAIGCImage();
      d.itemId = e.aigcImage.itemId;
      l.aigcImage = d;
    }
    l.everPhoto = j(e.everPhoto);
    return l;
  }
}
export function Uu(e, t) {
  if (e == null ? undefined : e.uri) {
    let i;
    let n;
    let o;
    let r;
    let l;
    let d;
    const u =
      t == null || (l = t.find((t) => t.key === e.uri)) == null
        ? undefined
        : l.imageInfo;
    return {
      imageUri: e.uri,
      aigcImage: ((d = e.aigcImage) == null ? undefined : d.itemId)
        ? {
            itemId: "".concat(e.aigcImage.itemId),
          }
        : undefined,
      imageUrl: u == null ? undefined : u.imageUrl,
      width: (i = u == null ? undefined : u.width) != null ? i : e.width,
      height: (n = u == null ? undefined : u.height) != null ? n : e.height,
      format: (o = u == null ? undefined : u.format) != null ? o : e.format,
      everPhoto:
        (r = u == null ? undefined : u.everPhoto) != null ? r : W(e.everPhoto),
      coverUrlMap: u == null ? undefined : u.coverUrlMap,
    };
  }
}
