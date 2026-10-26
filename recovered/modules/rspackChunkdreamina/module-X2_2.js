import { z } from "./module-NX_3.js";
import r from "Dm";
import n from "Xt";
import * as o from "./module-eI_2.js";
export function P(t) {
  let e;
  let i;
  let l;
  let s;
  let u;
  let c;
  let d;
  let h;
  let m;
  let v;
  let p;
  let f;
  const videoUrlMap = {};
  if (t.video.transcodedVideo) {
    for (const [y, _] of Object.entries(t.video.transcodedVideo)) {
      videoUrlMap[y] = _ == null ? undefined : _.videoUrl;
    }
  }
  const k = n.R(t.video);
  r.X3(k, "video-item with no origin-video!");
  return {
    key: t.id,
    shape: {
      width: (e = k == null ? undefined : k.width) != null ? e : 0,
      height: (i = k == null ? undefined : k.height) != null ? i : 0,
    },
    data: {
      key: t.id,
      type: "video",
      remixSource: o.RW(t),
      coverUrl: t.commonAttr.coverUrl,
      coverUrlMap: t.commonAttr.coverUrlMap,
      videoUrl: (l = k == null ? undefined : k.videoUrl) != null ? l : "",
      videoUrlMap,
      duration: (s = t.video.durationMs) != null ? s : 0,
      author: {
        avatar:
          (u = (m = t.author) == null ? undefined : m.avatarUrl) != null
            ? u
            : "",
        username:
          (c = (v = t.author) == null ? undefined : v.name) != null ? c : "",
      },
      statistic: {
        favoriteCount:
          (d = (p = t.statistic) == null ? undefined : p.favoriteNum) != null
            ? d
            : 0,
        hasFavorited:
          (h = (f = t.statistic) == null ? undefined : f.hasFavorited) !=
            null && h,
      },
      status: z(t.commonAttr.status, t.commonAttr.reviewInfo),
    },
  };
}
