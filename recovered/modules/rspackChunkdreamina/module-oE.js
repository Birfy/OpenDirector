export function qF(e, t, r) {
  let o;
  let i;
  let n;
  let c;
  let l;
  let m;
  let s;
  if (r) {
    if (
      (i = t.commonAttr) == null || (o = i.itemUrls) == null
        ? undefined
        : o.length
    ) {
      for (let [a, o] of Object.entries(t.commonAttr.itemUrls)) {
        t.commonAttr.itemUrls[a] = e(o, r);
      }
    }
    if (
      (c = t.video) == null || (n = c.originVideo) == null
        ? undefined
        : n.videoUrl
    ) {
      t.video.originVideo.videoUrl = e(
        (s = t.video) == null ? undefined : s.originVideo.videoUrl,
        r,
      );
    }
    if ((l = t.video) == null ? undefined : l.transcodedVideo) {
      for (let [a, o] of Object.entries(t.video.transcodedVideo)) {
        o.videoUrl = e(o.videoUrl, r);
        o.coverUrl = e(o.coverUrl, r);
      }
    }
    if ((m = t.collection) == null ? undefined : m.itemList) {
      for (let o of t.collection.itemList) {
        qF(e, o, r);
      }
    }
  }
}
export function sE(e, t, r) {
  if (r) {
    for (let o of t) {
      qF(e, o, r);
    }
  }
}
