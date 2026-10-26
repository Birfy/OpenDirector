if (require.j == "wl4") var a = require("NY");
function o(e, t, r) {
  return i.apply(this, arguments);
}
function i() {
  return (i = a._(function* (e, t, r) {
    let a;
    let i;
    let n;
    let c;
    let l;
    let m;
    let s;
    let d;
    let u;
    let p;
    let C;
    let v = [];
    if ((a = t.common_attr) == null ? undefined : a.cover_url) {
      v.push(
        e(t.common_attr.cover_url, r).then((e) => {
          t.common_attr.cover_url = e;
        }),
      );
    }
    if ((i = t.common_attr) == null ? undefined : i.cover_url_map) {
      for (let [a, o] of Object.entries(t.common_attr.cover_url_map)) {
        v.push(
          e(o, r).then((e) => {
            t.common_attr.cover_url_map[a] = e;
          }),
        );
      }
    }
    if (
      (c = t.common_attr) == null || (n = c.item_urls) == null
        ? undefined
        : n.length
    ) {
      for (let [a, o] of Object.entries(t.common_attr.item_urls)) {
        if (o) {
          v.push(
            e(o, r).then((e) => {
              t.common_attr.item_urls[a] = e;
            }),
          );
        }
      }
    }
    if ((l = t.image) == null ? undefined : l.large_images) {
      for (let a of t.image.large_images) {
        v.push(
          e(a.image_url, r).then((e) => {
            a.image_url = e;
          }),
        );
      }
    }
    if (
      (s = t.video) == null || (m = s.origin_video) == null
        ? undefined
        : m.video_url
    ) {
      v.push(
        e((C = t.video) == null ? undefined : C.origin_video.video_url, r).then(
          (e) => {
            t.video.origin_video.video_url = e;
          },
        ),
      );
    }
    if ((d = t.video) == null ? undefined : d.transcoded_video) {
      for (let [a, o] of Object.entries(t.video.transcoded_video)) {
        v.push(
          e(o.video_url, r).then((e) => {
            o.video_url = e;
          }),
        );
        v.push(
          e(o.cover_url, r).then((e) => {
            o.cover_url = e;
          }),
        );
      }
    }
    if ((u = t.video) == null ? undefined : u.cover_url) {
      v.push(
        e(t.video.cover_url, r).then((e) => {
          t.video.cover_url = e;
        }),
      );
    }
    if ((p = t.collection) == null ? undefined : p.item_list) {
      for (let a of t.collection.item_list) {
        v.push(o(e, a, r));
      }
    }
    yield Promise.all(v);
  })).apply(this, arguments);
}
export function a0(e, t, r) {
  return c.apply(this, arguments);
}
function c() {
  return (c = a._(function* (e, t, r) {
    if (!r) {
      return;
    }
    let a = [];
    for (let i of t) {
      a.push(o(e, i, r));
    }
    yield Promise.all(a);
  })).apply(this, arguments);
}
