import r from "z8f";
import o from "BwB";
export function w(e, t) {
  if ("video" in t) {
    return o.b(e, t.video, {
      aigcItemId: t.id,
    });
  }
  const {
    commonAttr: { id, coverUrlMap },
    image: { largeImages },
  } = t;
  const s = largeImages == null ? undefined : largeImages.at(0);
  if (s) {
    return r.h(e, s, {
      resolutionUrlMap: coverUrlMap,
      cacheKey: id,
      aigcItemId: id,
    });
  }
}
