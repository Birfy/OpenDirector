import r from "oa";
import a from "at";
export function h(e, t, i) {
  const { imageUri, imageUrl = "", coverUrlMap, aigcImage, width, height } = t;
  const d = aigcImage == null ? undefined : aigcImage.itemId;
  return e.createInstance(
    a.Vl,
    r._(
      {
        uri: imageUri,
        url: imageUrl,
        aigcItemId: d,
        resolutionUrlMap: coverUrlMap,
        cacheKey: d,
      },
      typeof width === "number" && typeof height === "number"
        ? {
            width,
            height,
          }
        : null,
      i,
    ),
  );
}
