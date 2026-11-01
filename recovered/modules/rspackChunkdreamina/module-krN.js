export var yC = {
  Image: "image",
  Video: "video",
  Audio: "audio",
};
export function nV(e, t) {
  return "".concat(e, "-").concat(t);
}
export function uZ(e) {
  const { content } = e;
  if (content.videoInfo) {
    return "video";
  }
  if (content.audioInfo) {
    return "audio";
  }
  return "image";
}
function s(e) {
  let t;
  if ((t = e == null ? undefined : e.duration) != null) {
    return t;
  }
  return 0;
}
export function yX(e) {
  let t;
  let i;
  let n;
  return {
    audioDuration:
      s(e.content.audioInfo) +
      s((i = e.content.selectedVoice) == null ? undefined : i.audioInfo),
    videoDuration:
      (t = (n = e.content.videoInfo) == null ? undefined : n.duration) != null
        ? t
        : 0,
  };
}
export function q3(e, t, i) {
  const n = new Set();
  const r = {
    audioDuration: 0,
    videoDuration: 0,
  };
  for (const a of e) {
    const o = t(a);
    if (!n.has(o)) {
      n.add(o);
      const s = yX(i(a));
      r.audioDuration += s.audioDuration;
      r.videoDuration += s.videoDuration;
    }
  }
  return r;
}
