import i from "oa";
import a from "bk";
import o from "LLl";
import n from "Knp";
import s from "BDO";
import l from "Xt";
import c from "IH7";
import d from "X2";
import u from "E98";
export function Q(e) {
  const t = [];
  for (const r of e) {
    try {
      if (o.Y(r)) {
        t.push(c.J(r));
      } else if (n.a(r)) {
        t.push(d.P(r));
      }
    } catch (e) {}
  }
  return t;
}
export function P(e) {
  return e.flatMap((e) => {
    if (!s.S(e)) {
      return [];
    }
    var t;
    var r;
    var o;
    var n;
    var c;
    var d;
    var v;
    var h = l.R(e.video);
    if (!(h == null ? undefined : h.videoUrl)) {
      return [];
    }
    var coverUrlMap = e.commonAttr.coverUrlMap;
    return [
      a._(
        i._(
          {
            id: e.id,
            title: (t = e.commonAttr.title) != null ? t : "",
            coverUrl:
              e.commonAttr.coverUrl || e.video.coverUrl || h.coverUrl || "",
          },
          coverUrlMap === undefined
            ? {}
            : {
                coverUrlMap,
              },
        ),
        {
          previewUrl: h.videoUrl,
          durationMs: (r = e.video.durationMs) != null ? r : 0,
          author: {
            name:
              (o = (c = e.author) == null ? undefined : c.name) != null
                ? o
                : "",
            avatarUrl:
              (n = (d = e.author) == null ? undefined : d.avatarUrl) != null
                ? n
                : "",
          },
          canPreviewCanvas: u.x(e),
          canvasSourceType:
            (v = e.canvasInfo) == null ? undefined : v.canvasSourceType,
        },
      ),
    ];
  });
}
