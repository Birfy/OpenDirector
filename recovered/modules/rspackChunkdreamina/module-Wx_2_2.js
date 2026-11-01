export function qE(e, t, r) {
  if (r) {
    for (let a of t) {
      (function e(t, r, a) {
        let o;
        let i;
        let n;
        let c;
        let l;
        let m;
        let s;
        if (a) {
          if (
            (i = r.common_attr) == null || (o = i.item_urls) == null
              ? undefined
              : o.length
          ) {
            for (let [e, o] of Object.entries(r.common_attr.item_urls)) {
              r.common_attr.item_urls[e] = t(o, a);
            }
          }
          if (
            (c = r.video) == null || (n = c.origin_video) == null
              ? undefined
              : n.video_url
          ) {
            r.video.origin_video.video_url = t(
              (s = r.video) == null ? undefined : s.origin_video.video_url,
              a,
            );
          }
          if ((l = r.video) == null ? undefined : l.transcoded_video) {
            for (let [e, o] of Object.entries(r.video.transcoded_video)) {
              o.video_url = t(o.video_url, a);
              o.cover_url = t(o.cover_url, a);
            }
          }
          if ((m = r.collection) == null ? undefined : m.item_list) {
            for (let o of r.collection.item_list) {
              e(t, o, a);
            }
          }
        }
      })(e, a, r);
    }
  }
}
