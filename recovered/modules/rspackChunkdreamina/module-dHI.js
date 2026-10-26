import r from "sV8";
import o from "aS";
import n from "lRe";
import a from "z8f";
import s from "BwB";
export function R(e, t, i) {
  if (r.n(t)) {
    var c;
    let l;
    const u = t.itemList.at(i);
    if (!(u == null ? undefined : u.audio)) {
      return;
    }
    const { id, audio, audioTitle } = u;
    const name =
      (audioTitle == null ? undefined : audioTitle.trim()) ||
      ((l = audio.title) == null ? undefined : l.trim()) ||
      "";
    return n.M(e, audio, {
      aigcItemId: id,
      name,
    });
  }
  if (o.g(t)) {
    const p = t.itemList.at(i);
    if (!(p == null ? undefined : p.video)) {
      return;
    }
    const { id, video } = p;
    return s.b(e, video, {
      aigcItemId: id,
    });
  }
  const f = t.itemList.at(i);
  const y =
    f == null || (c = f.image.largeImages) == null ? undefined : c.at(0);
  if (f && y) {
    const { id, commonAttr } = f;
    return a.h(e, y, {
      aigcItemId: id,
      resolutionUrlMap: commonAttr.coverUrlMap,
      cacheKey: id,
    });
  }
}
