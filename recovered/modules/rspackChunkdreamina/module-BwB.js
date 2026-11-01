import r from "oa";
import a from "bk";
import n from "K4";
export function b(e, t, i) {
  const { videoId, coverUrl, duration, originVideo } = t;
  const {
    videoUrl = "",
    aigcVideo,
    width,
    height,
  } = originVideo != null ? originVideo : {};
  const aigcItemId = aigcVideo == null ? undefined : aigcVideo.itemId;
  return e.createInstance(
    n.p,
    r._(
      a._(
        r._(
          {
            uri: videoId,
            url: videoUrl,
            coverUrl,
          },
          typeof width === "number" &&
            typeof height === "number" &&
            typeof duration === "number"
            ? {
                width,
                height,
                duration,
              }
            : null,
        ),
        {
          aigcItemId,
        },
      ),
      i,
    ),
  );
}
