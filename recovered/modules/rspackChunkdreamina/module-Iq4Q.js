export function g(e) {
  let t;
  let a;
  let s;
  let i;
  let r;
  let n;
  let o;
  return {
    vid: (t = (s = e.audioInfo) == null ? undefined : s.vid) != null ? t : "",
    audioUrl:
      (a = (i = e.audioInfo) == null ? undefined : i.audioUrl) != null
        ? a
        : (r = e.audioInfo) == null
          ? undefined
          : r.url,
    duration: (n = e.audioInfo) == null ? undefined : n.duration,
    title: (o = e.audioInfo) == null ? undefined : o.title,
    source: e.source,
  };
}
export function M(e) {
  return {
    audioInfo: {
      vid: e.vid,
      audioUrl: e.audioUrl,
      url: e.audioUrl,
      duration: e.duration,
      title: e.title,
    },
    source: e.source,
  };
}
