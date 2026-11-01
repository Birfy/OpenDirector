import n from "oa";
import a from "bk";
import o from "Ut";
export function M(e, t) {
  let i;
  let o;
  const vid = e == null ? undefined : e.vid;
  if (vid) {
    const l =
      t == null || (o = t.find((e) => e.key === vid)) == null
        ? undefined
        : o.audioInfo;
    return a._(
      n._(
        {
          vid,
        },
        l,
      ),
      {
        title:
          (i = l == null ? undefined : l.title) != null
            ? i
            : e.name || undefined,
        originAudio: n._(
          {
            vid,
          },
          l == null ? undefined : l.originAudio,
        ),
      },
    );
  }
}
export function h(e, t) {
  if (e == null ? undefined : e.vid) {
    let i;
    let n;
    let a;
    let r;
    let l;
    const d = new o.DAAudioResource();
    d.sourceFrom =
      (i = t == null ? undefined : t.sourceFrom) != null
        ? i
        : o.DAResourceSourceFrom.upload;
    d.vid = e.vid;
    d.setDurationSecond(
      (n = (l = e.originAudio) == null ? undefined : l.duration) != null
        ? n
        : 0,
    );
    d.name =
      (a = (r = t == null ? undefined : t.name) != null ? r : e.title) != null
        ? a
        : "";
    return d;
  }
}
