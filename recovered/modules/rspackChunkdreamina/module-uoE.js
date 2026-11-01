import r from "krN";
import o from "gG";
const n = new Set(Object.values(r.yC));
export function f(e) {
  let t;
  let i;
  let a;
  const s =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : n;
  const { name, audioInfo, mainImage, selectedVoice, videoInfo } = e.content;
  const v =
    audioInfo != null
      ? audioInfo
      : selectedVoice == null
        ? undefined
        : selectedVoice.audioInfo;
  const _ = mainImage == null ? undefined : mainImage.imageUrl;
  const p = videoInfo == null ? undefined : videoInfo.videoUrl;
  const m =
    (t = v == null ? undefined : v.audioUrl) != null
      ? t
      : v == null
        ? undefined
        : v.url;
  const id = o.K(e);
  return [
    ...(_ && s.has(r.yC.Image)
      ? [
          {
            id,
            name,
            url: _,
            type: "image",
            width: mainImage.width,
            height: mainImage.height,
            remoteExtraInfo: {
              resolutionUrlMap: mainImage.coverUrlMap,
            },
          },
        ]
      : []),
    ...(p && s.has(r.yC.Video)
      ? [
          {
            id,
            name,
            url: p,
            type: "video",
            width: videoInfo.width,
            height: videoInfo.height,
            duration: (i = videoInfo.duration) != null ? i : 0,
            coverUrl: videoInfo.coverUrl,
          },
        ]
      : []),
    ...(m && s.has(r.yC.Audio)
      ? [
          {
            id,
            name,
            url: m,
            type: "audio",
            duration: (a = v == null ? undefined : v.duration) != null ? a : 0,
          },
        ]
      : []),
  ];
}
