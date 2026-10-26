import r from "oa";
export function s(e) {
  const {
    uri = "",
    url,
    coverUrl,
    width,
    height,
    duration,
    name,
    remoteExtraInfo,
  } = e;
  const { aigcItemId } = remoteExtraInfo != null ? remoteExtraInfo : {};
  return {
    videoId: uri,
    coverUrl,
    duration,
    originVideo: r._(
      {
        videoUrl: url,
        width,
        height,
      },
      aigcItemId
        ? {
            aigcVideo: {
              itemId: aigcItemId,
            },
          }
        : {},
    ),
    title: name,
  };
}
