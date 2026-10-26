import r from "oa";
import n from "bk";
import { Y } from "./module-LLl.js";
import { a } from "./module-Knp.js";
import { S } from "./module-BDO.js";
import { R } from "./module-Xt.js";
import { J } from "./module-IH7.js";
import { P } from "./module-X2.js";
import { x } from "./module-E98.js";
export function Q(e) {
  const t = [];
  for (const i of e) {
    try {
      if (Y(i)) {
        t.push(J(i));
      } else if (a(i)) {
        t.push(P(i));
      }
    } catch (e) {}
  }
  return t;
}
function p(e) {
  return e.flatMap((e) => {
    if (!S(e)) {
      return [];
    }
    var t;
    var i;
    var a;
    var o;
    var c;
    var d;
    var m;
    var p = R(e.video);
    if (!(p == null ? undefined : p.videoUrl)) {
      return [];
    }
    var coverUrlMap = e.commonAttr.coverUrlMap;
    return [
      n._(
        r._(
          {
            id: e.id,
            title: (t = e.commonAttr.title) != null ? t : "",
            coverUrl:
              e.commonAttr.coverUrl || e.video.coverUrl || p.coverUrl || "",
          },
          coverUrlMap === undefined
            ? {}
            : {
                coverUrlMap,
              },
        ),
        {
          previewUrl: p.videoUrl,
          durationMs: (i = e.video.durationMs) != null ? i : 0,
          author: {
            name:
              (a = (c = e.author) == null ? undefined : c.name) != null
                ? a
                : "",
            avatarUrl:
              (o = (d = e.author) == null ? undefined : d.avatarUrl) != null
                ? o
                : "",
          },
          canPreviewCanvas: x(e),
          canvasSourceType:
            (m = e.canvasInfo) == null ? undefined : m.canvasSourceType,
        },
      ),
    ];
  });
}
export { p as P };
