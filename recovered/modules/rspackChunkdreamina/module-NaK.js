import n from "Ut";
import { W, j } from "./module-po.js";
export function c(e) {
  if (e) {
    let t;
    let i;
    let o;
    let r;
    const l = new n.DAImageResource();
    l.sourceFrom = n.DAResourceSourceFrom.upload;
    l.platformType = n.DAImageResourcePlatformType.imageX;
    l.uri = e.imageUri;
    l.width = (t = e.width) != null ? t : 0;
    l.height = (i = e.height) != null ? i : 0;
    l.format = (o = e.format) != null ? o : "";
    l.title = (r = e.title) != null ? r : "";
    l.everPhoto = j(e.everPhoto);
    if (e.aigcImage) {
      const d = new n.DAAIGCImage();
      d.itemId = e.aigcImage.itemId;
      l.aigcImage = d;
    }
    return l;
  }
}
export function X(e, t) {
  if (e == null ? undefined : e.uri) {
    let i;
    let n;
    let o;
    let r;
    let l;
    let d;
    let u;
    const m =
      t == null || (d = t.find((t) => t.key === e.uri)) == null
        ? undefined
        : d.imageInfo;
    return {
      imageUri: e.uri,
      aigcImage: ((u = e.aigcImage) == null ? undefined : u.itemId)
        ? {
            itemId: "".concat(e.aigcImage.itemId),
          }
        : undefined,
      imageUrl: m == null ? undefined : m.imageUrl,
      width: (i = m == null ? undefined : m.width) != null ? i : e.width,
      height: (n = m == null ? undefined : m.height) != null ? n : e.height,
      format: (o = m == null ? undefined : m.format) != null ? o : e.format,
      everPhoto:
        (r = m == null ? undefined : m.everPhoto) != null ? r : W(e.everPhoto),
      coverUrlMap: m == null ? undefined : m.coverUrlMap,
      title: (l = m == null ? undefined : m.title) != null ? l : e.title,
    };
  }
}
