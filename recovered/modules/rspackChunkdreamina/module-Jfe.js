import { uZ, yC } from "./module-krN.js";
import r from "Iq4Q";
export function U(e, t) {
  let i;
  let a;
  let o;
  let s;
  let l;
  let c;
  const { includeSelectedVoice = false } = t != null ? t : {};
  const d = uZ(e);
  return {
    mediaType: d === yC.Video ? "video" : d === yC.Audio ? "audio" : "image",
    name: e.content.name,
    description: e.content.description,
    mainImage: e.content.mainImage,
    auxiliaryImages: e.content.auxiliaryImages,
    video: e.content.videoInfo
      ? {
          videoId: (i = e.content.videoInfo.vid) != null ? i : "",
          aigcItemId:
            (s = e.content.videoInfo.aigcVideo) == null ? undefined : s.itemId,
          videoUrl: e.content.videoInfo.videoUrl,
          coverUrl: e.content.videoInfo.coverUrl,
          duration: e.content.videoInfo.duration,
        }
      : undefined,
    audio: e.content.audioInfo
      ? {
          vid: (a = e.content.audioInfo.vid) != null ? a : "",
          aigcItemId:
            (l = e.content.audioInfo.aigcAudio) == null ? undefined : l.itemId,
          audioUrl:
            (o = e.content.audioInfo.audioUrl) != null
              ? o
              : e.content.audioInfo.url,
          title: e.content.audioInfo.title,
          duration: e.content.audioInfo.duration,
          durationMs: e.content.audioInfo.durationMs,
        }
      : undefined,
    voiceList: (c = e.content.voiceList) == null ? undefined : c.map(r.g),
    selectedVoice:
      includeSelectedVoice && e.content.selectedVoice
        ? r.g(e.content.selectedVoice)
        : undefined,
  };
}
