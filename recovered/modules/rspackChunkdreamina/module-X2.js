import { z } from "./module-NX_2.js";
import n from "Dm";
import { R } from "./module-Xt.js";
import * as o from "./module-eI.js";
export function P(e) {
  let t;
  let i;
  let s;
  let l;
  let c;
  let d;
  let u;
  let m;
  let p;
  let h;
  let v;
  let g;
  const videoUrlMap = {};
  if (e.video.transcodedVideo) {
    for (const [b, y] of Object.entries(e.video.transcodedVideo)) {
      videoUrlMap[b] = y == null ? undefined : y.videoUrl;
    }
  }
  const _ = R(e.video);
  n.X3(_, "video-item with no origin-video!");
  return {
    key: e.id,
    shape: {
      width: (t = _ == null ? undefined : _.width) != null ? t : 0,
      height: (i = _ == null ? undefined : _.height) != null ? i : 0,
    },
    data: {
      key: e.id,
      type: "video",
      remixSource: o.RW(e),
      coverUrl: e.commonAttr.coverUrl,
      coverUrlMap: e.commonAttr.coverUrlMap,
      videoUrl: (s = _ == null ? undefined : _.videoUrl) != null ? s : "",
      videoUrlMap,
      duration: (l = e.video.durationMs) != null ? l : 0,
      author: {
        avatar:
          (c = (p = e.author) == null ? undefined : p.avatarUrl) != null
            ? c
            : "",
        username:
          (d = (h = e.author) == null ? undefined : h.name) != null ? d : "",
      },
      statistic: {
        favoriteCount:
          (u = (v = e.statistic) == null ? undefined : v.favoriteNum) != null
            ? u
            : 0,
        hasFavorited:
          (m = (g = e.statistic) == null ? undefined : g.hasFavorited) !=
            null && m,
      },
      status: z(e.commonAttr.status, e.commonAttr.reviewInfo),
    },
  };
}
