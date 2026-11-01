import { z } from "./module-NX_2.js";
import * as n from "./module-eI.js";
export function J(e) {
  let t;
  let i;
  let a;
  let o;
  let s;
  let l;
  let c;
  let d;
  let u;
  let m;
  return {
    key: e.id,
    shape: {
      width: (t = e.commonAttr.coverWidth) != null ? t : 0,
      height: (i = e.commonAttr.coverHeight) != null ? i : 0,
    },
    data: {
      key: e.id,
      type: "image",
      remixSource: n.RW(e),
      coverUrl: e.commonAttr.coverUrl,
      coverUrlMap: e.commonAttr.coverUrlMap,
      author: {
        avatar:
          (a = (c = e.author) == null ? undefined : c.avatarUrl) != null
            ? a
            : "",
        username:
          (o = (d = e.author) == null ? undefined : d.name) != null ? o : "",
      },
      statistic: {
        favoriteCount:
          (s = (u = e.statistic) == null ? undefined : u.favoriteNum) != null
            ? s
            : 0,
        hasFavorited:
          (l = (m = e.statistic) == null ? undefined : m.hasFavorited) !=
            null && l,
      },
      status: z(e.commonAttr.status, e.commonAttr.reviewInfo),
    },
  };
}
