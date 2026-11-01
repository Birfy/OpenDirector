import i from "oa";
import r from "bk";
import a from "xi";
export function L(e) {
  try {
    if (!e) {
      a.V.warn("extractImageDataFromEffectItem: No items found in mediaData");
      return null;
    }
    let t;
    let n;
    let o;
    let l;
    const { commonAttr } = e;
    const s = {
      url: commonAttr.coverUrl,
      uri: commonAttr.coverUri,
      resolutionUrlMap: commonAttr.coverUrlMap || {},
      id: commonAttr.id,
      aigcItemId: e.id || commonAttr.id,
      width: commonAttr.coverWidth,
      height: commonAttr.coverHeight,
    };
    if ("image" in e) {
      return r._(i._({}, s), {
        rawWidth:
          (n = e.image.largeImages) == null || (t = n[0]) == null
            ? undefined
            : t.width,
        rawHeight:
          (l = e.image.largeImages) == null || (o = l[0]) == null
            ? undefined
            : o.height,
      });
    }
    return s;
  } catch (error) {
    a.V.error("extractImageDataFromEffectItem error:", error);
    return null;
  }
}
