import n from "oa";
import a from "bk";
import o from "Ut";
import { N } from "./module-Tj_3.js";
function l(e, t) {
  let i;
  let o;
  const l = e == null ? undefined : e.vid;
  if (l) {
    const d =
      t == null || (i = t.find((e) => e.key === l)) == null
        ? undefined
        : i.videoInfo;
    return a._(
      n._(
        {
          videoId: l,
        },
        d,
      ),
      {
        originVideo: ((o = e.aigcVideo) == null ? undefined : o.itemId)
          ? a._(n._({}, d == null ? undefined : d.originVideo), {
              vid: l,
              aigcVideo: {
                itemId: "".concat(e.aigcVideo.itemId),
              },
            })
          : d == null
            ? undefined
            : d.originVideo,
        duration: N(
          d == null ? undefined : d.durationMs,
          d == null ? undefined : d.duration,
        ),
      },
    );
  }
}
export { l as N };
function d(e) {
  let t;
  let i;
  let n;
  let a;
  let r;
  let l;
  let d;
  let u;
  let m;
  let s;
  let g;
  let p;
  const c =
    (t = e == null ? undefined : e.videoId) != null
      ? t
      : e == null
        ? undefined
        : e.vid;
  if (e && c) {
    const v = new o.DAVideoResource();
    v.sourceFrom = o.DAResourceSourceFrom.upload;
    v.vid = c;
    const f =
      (i =
        e == null || (m = e.transcodedVideo) == null ? undefined : m.origin) !=
      null
        ? i
        : e == null
          ? undefined
          : e.originVideo;
    const I =
      (n = e.aigcVideo) != null
        ? n
        : (s = e.originVideo) == null
          ? undefined
          : s.aigcVideo;
    if (I == null ? undefined : I.itemId) {
      v.aigcVideo = new o.DAAIGCVideo();
      v.aigcVideo.itemId = I.itemId;
    }
    v.width =
      (a = (r = f == null ? undefined : f.width) != null ? r : e.width) != null
        ? a
        : 0;
    v.height =
      (l = (d = f == null ? undefined : f.height) != null ? d : e.height) !=
      null
        ? l
        : 0;
    v.coverImage =
      (u = f == null ? undefined : f.coverUrl) != null ? u : e.coverUrl;
    if (e.durationMs) {
      v.setDurationMilliSecond((g = e.durationMs) != null ? g : 0);
    }
    if (e.duration) {
      v.setDurationSecond((p = e.duration) != null ? p : 0);
    }
    return v;
  }
}
export { d as a };
