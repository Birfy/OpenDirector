import n from "Ut";
import { N } from "./module-Tj_3.js";
export function w(e, t) {
  let i;
  let n;
  let o;
  let r;
  let l;
  let d;
  const u = e == null ? undefined : e.vid;
  if (u) {
    const m =
      t == null || (r = t.find((e) => e.key === u)) == null
        ? undefined
        : r.videoInfo;
    if (m) {
      return {
        vid: u,
        duration:
          (i = N(
            m == null ? undefined : m.durationMs,
            m == null ? undefined : m.duration,
          )) != null
            ? i
            : 0,
        fileId: u,
        fileHash: u,
        url:
          (n = (l = m.originVideo) == null ? undefined : l.videoUrl) != null
            ? n
            : "",
        format:
          (o = (d = m.originVideo) == null ? undefined : d.format) != null
            ? o
            : "",
      };
    }
  }
}
export function l(e, t) {
  if (e == null ? undefined : e.videoId) {
    let i;
    let a;
    let o;
    const r = new n.DAAudioResource();
    r.sourceFrom =
      (i = t == null ? undefined : t.sourceFrom) != null
        ? i
        : n.DAResourceSourceFrom.upload;
    r.vid = e.videoId;
    r.setDurationSecond((a = e.duration) != null ? a : 0);
    r.name = (o = t == null ? undefined : t.name) != null ? o : "";
    return r;
  }
}
