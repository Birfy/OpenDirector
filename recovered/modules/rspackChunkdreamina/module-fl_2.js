import n from "Ut";
import { X, c } from "./module-NaK.js";
import { N, a } from "./module-y3V.js";
export var x = (e) => {
  if (e == null ? undefined : e.length) {
    return e.map((e) => {
      var t = new n.DAMultiFrame();
      t.idx = e.idx;
      t.durationMs = e.durationMs;
      t.prompt = e.prompt;
      if (e.mediaInfo) {
        var i = new n.DAMediaInfo();
        i.mediaType = e.mediaInfo.mediaType;
        var { mediaInfo } = e;
        if (mediaInfo.mediaType === n.DAMediaType.Image) {
          i.imageInfo = c(mediaInfo.imageInfo);
        }
        if (mediaInfo.mediaType === n.DAMediaType.Video) {
          i.videoInfo = a(mediaInfo.videoInfo);
        }
        t.mediaInfo = i;
        t.segmentVideo = a(e.segmentVideo);
      }
      return t;
    });
  }
};
export var I = (e, t) => {
  if (e == null ? undefined : e.length) {
    return e.map((e) => {
      var i;
      var r;
      var mediaInfo = {
        mediaType: n.DAMediaType.None,
      };
      var e_mediaInfo = e.mediaInfo;
      if (
        (e_mediaInfo == null ? undefined : e_mediaInfo.mediaType) ===
          n.DAMediaType.Image &&
        e_mediaInfo.imageInfo
      ) {
        var imageInfo = X(e_mediaInfo.imageInfo, t);
        if (imageInfo) {
          mediaInfo = {
            mediaType: n.DAMediaType.Image,
            imageInfo,
          };
        }
      }
      if (
        (e_mediaInfo == null ? undefined : e_mediaInfo.mediaType) ===
          n.DAMediaType.Video &&
        e_mediaInfo.videoInfo
      ) {
        var videoInfo = N(e_mediaInfo.videoInfo, t);
        if (videoInfo) {
          mediaInfo = {
            mediaType: n.DAMediaType.Video,
            videoInfo,
          };
        }
      }
      return {
        idx: (i = e.idx) != null ? i : 0,
        durationMs: (r = e.durationMs) != null ? r : 0,
        mediaInfo,
        prompt: e.prompt,
        segmentVideo: N(e.segmentVideo, t),
      };
    });
  }
};
