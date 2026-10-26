if (require.j == "wl4") var a = require("NY");
export function iX(e, t, r) {
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
    if ((a = t.commonAttr) == null ? undefined : a.coverUrl) {
      v.push(
        e(t.commonAttr.coverUrl, r).then((e) => {
          t.commonAttr.coverUrl = e;
        }),
      );
    }
    if ((i = t.commonAttr) == null ? undefined : i.coverUrlMap) {
      for (let [a, o] of Object.entries(t.commonAttr.coverUrlMap)) {
        v.push(
          e(o, r).then((e) => {
            t.commonAttr.coverUrlMap[a] = e;
          }),
        );
      }
    }
    if (
      (c = t.commonAttr) == null || (n = c.itemUrls) == null
        ? undefined
        : n.length
    ) {
      for (let [a, o] of t.commonAttr.itemUrls.entries()) {
        if (o) {
          v.push(
            e(o, r).then((e) => {
              t.commonAttr.itemUrls[a] = e;
            }),
          );
        }
      }
    }
    if ((l = t.image) == null ? undefined : l.largeImages) {
      for (let a of t.image.largeImages) {
        v.push(
          e(a.imageUrl, r).then((e) => {
            a.imageUrl = e;
          }),
        );
      }
    }
    if (
      (s = t.video) == null || (m = s.originVideo) == null
        ? undefined
        : m.videoUrl
    ) {
      v.push(
        e((C = t.video) == null ? undefined : C.originVideo.videoUrl, r).then(
          (e) => {
            t.video.originVideo.videoUrl = e;
          },
        ),
      );
    }
    if ((d = t.video) == null ? undefined : d.transcodedVideo) {
      for (let [a, o] of Object.entries(t.video.transcodedVideo)) {
        v.push(
          e(o.videoUrl, r).then((e) => {
            o.videoUrl = e;
          }),
        );
        v.push(
          e(o.coverUrl, r).then((e) => {
            o.coverUrl = e;
          }),
        );
      }
    }
    if ((u = t.video) == null ? undefined : u.coverUrl) {
      v.push(
        e(t.video.coverUrl, r).then((e) => {
          t.video.coverUrl = e;
        }),
      );
    }
    if ((p = t.collection) == null ? undefined : p.itemList) {
      for (let a of t.collection.itemList) {
        v.push(iX(e, a, r));
      }
    }
    yield Promise.all(v);
  })).apply(this, arguments);
}
export function IG(e, t, r) {
  return c.apply(this, arguments);
}
function c() {
  return (c = a._(function* (e, t, r) {
    if (!r) {
      return;
    }
    let a = [];
    for (let i of t) {
      a.push(iX(e, i, r));
    }
    yield Promise.all(a);
  })).apply(this, arguments);
}
Object.defineProperty(exports, "BU", {
  enumerable: true,
  get: () =>
    function e(t, r, a) {
      let o;
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
      if ((o = r.commonAttr) == null ? undefined : o.coverUrl) {
        r.commonAttr.coverUrl = t(r.commonAttr.coverUrl, a);
      }
      if ((i = r.commonAttr) == null ? undefined : i.coverUrlMap) {
        for (let [e, o] of Object.entries(r.commonAttr.coverUrlMap)) {
          r.commonAttr.coverUrlMap[e] = t(o, a);
        }
      }
      if (
        (c = r.commonAttr) == null || (n = c.itemUrls) == null
          ? undefined
          : n.length
      ) {
        for (let [e, o] of Object.entries(r.commonAttr.itemUrls)) {
          r.commonAttr.itemUrls[e] = t(o, a);
        }
      }
      if ((l = r.image) == null ? undefined : l.largeImages) {
        for (let e of r.image.largeImages) {
          e.imageUrl = t(e.imageUrl, a);
        }
      }
      if (
        (s = r.video) == null || (m = s.originVideo) == null
          ? undefined
          : m.videoUrl
      ) {
        r.video.originVideo.videoUrl = t(
          (C = r.video) == null ? undefined : C.originVideo.videoUrl,
          a,
        );
      }
      if ((d = r.video) == null ? undefined : d.transcodedVideo) {
        for (let [e, o] of Object.entries(r.video.transcodedVideo)) {
          o.videoUrl = t(o.videoUrl, a);
          o.coverUrl = t(o.coverUrl, a);
        }
      }
      if ((u = r.video) == null ? undefined : u.coverUrl) {
        r.video.coverUrl = t(r.video.coverUrl, a);
      }
      if ((p = r.collection) == null ? undefined : p.itemList) {
        for (let o of r.collection.itemList) {
          e(t, o, a);
        }
      }
    },
});
