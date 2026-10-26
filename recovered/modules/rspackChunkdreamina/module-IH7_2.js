import { z } from "./module-NX_3.js";
import * as r from "./module-eI_2.js";
export function J(t) {
  let e;
  let i;
  let n;
  let o;
  let l;
  let s;
  let u;
  let c;
  let d;
  let h;
  return {
    key: t.id,
    shape: {
      width: (e = t.commonAttr.coverWidth) != null ? e : 0,
      height: (i = t.commonAttr.coverHeight) != null ? i : 0,
    },
    data: {
      key: t.id,
      type: "image",
      remixSource: r.RW(t),
      coverUrl: t.commonAttr.coverUrl,
      coverUrlMap: t.commonAttr.coverUrlMap,
      author: {
        avatar:
          (n = (u = t.author) == null ? undefined : u.avatarUrl) != null
            ? n
            : "",
        username:
          (o = (c = t.author) == null ? undefined : c.name) != null ? o : "",
      },
      statistic: {
        favoriteCount:
          (l = (d = t.statistic) == null ? undefined : d.favoriteNum) != null
            ? l
            : 0,
        hasFavorited:
          (s = (h = t.statistic) == null ? undefined : h.hasFavorited) !=
            null && s,
      },
      status: z(t.commonAttr.status, t.commonAttr.reviewInfo),
    },
  };
}
