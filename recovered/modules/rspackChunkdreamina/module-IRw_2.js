import a from "TA";
function r(width, height) {
  if (width && height) {
    return width * height;
  }
  return 0;
}
function n(t) {
  return [
    ...new Set(
      t
        .map((t) => {
          if (t == null) {
            return undefined;
          }
          return t.trim();
        })
        .filter((t) => !!t),
    ),
  ];
}
function o(t) {
  let e;
  let i;
  let a;
  if (
    (i = [
      ...((e = (a = t.image) == null ? undefined : a.largeImages) != null
        ? e
        : []),
    ].sort((t, e) => r(e.width, e.height) - r(t.width, t.height))[0]) == null
  ) {
    return undefined;
  }
  return i.imageUrl;
}
export function ES(t) {
  let e;
  let i;
  if ((e = (i = t.commonAttr) == null ? undefined : i.coverUrlMap) != null) {
    return e;
  }
  return {};
}
export function r8(t) {
  let e;
  let i;
  let a;
  let r;
  let l;
  let s;
  if (t.type === "image") {
    return n([
      (s = t.commonAttr) == null ? undefined : s.coverUrl,
      o(t),
      t.url,
    ]);
  }
  return n([
    (i = t.commonAttr) == null ? undefined : i.coverUrl,
    (r = t.video) == null || (a = r.originVideo) == null
      ? undefined
      : a.coverUrl,
    ...Object.values(
      (e = (l = t.video) == null ? undefined : l.transcodedVideo) != null
        ? e
        : {},
    ).map((t) => t.coverUrl),
  ]);
}
export function ID(t) {
  let e;
  return ((e = t.coverUrl) == null ? undefined : e.trim()) || undefined;
}
export function qW(t, e) {
  const i = t[0];
  const a = t.find((t) => t.type === "image");
  const coverMedia = (i == null ? undefined : i.type) === "video" ? i : a;
  const coverImageUrl =
    (coverMedia == null ? undefined : coverMedia.type) === "video"
      ? ID(coverMedia)
      : undefined;
  const coverUrlMap = coverMedia ? ES(coverMedia) : {};
  const c = Object.keys(coverUrlMap).length > 0;
  if (coverImageUrl) {
    return {
      coverMedia,
      coverImageUrl,
      coverUrlMap,
      imageErrorFallbackUrls: c ? [coverImageUrl] : [],
    };
  }
  const d = coverMedia ? r8(coverMedia) : [];
  const h =
    (coverMedia == null ? undefined : coverMedia.type) === "video"
      ? [...new Set([...d, ...(e ? [e] : []), ...(a ? r8(a) : [])])]
      : d;
  return {
    coverMedia,
    coverImageUrl: h[0],
    coverUrlMap,
    imageErrorFallbackUrls: c ? h : h.slice(1),
  };
}
export function Z3(t, e) {
  let i;
  let a;
  let r;
  return n([
    t.type === "video" ? ID(t) : undefined,
    (a = t.commonAttr) == null ? undefined : a.coverUrl,
    ...Object.values(
      (i = (r = t.commonAttr) == null ? undefined : r.coverUrlMap) != null
        ? i
        : {},
    ),
    ...r8(t),
    t.type === "video" ? e : undefined,
  ])[0];
}
export function X5(t) {
  let e;
  if ((e = o(t)) != null) {
    return e;
  }
  return t.url;
}
export function iU(t, e, i) {
  let n;
  let o;
  let l;
  let s;
  let u;
  let c;
  let d;
  let h;
  const m = Object.entries(
    (n = (u = t.video) == null ? undefined : u.transcodedVideo) != null
      ? n
      : {},
  )
    .flatMap((t) => {
      var [a, r] = t;
      var n = ((info, e, i, a) => {
        if (info.width && info.height) {
          return {
            info,
            width: info.width,
            height: info.height,
          };
        }
        let r;
        let n;
        const o = Number(
          (n = ((r = info.definition) != null ? r : e).match(/\d+/)) == null
            ? undefined
            : n[0],
        );
        if (o) {
          const l = i && a ? i / a : 1;
          if (i > a) {
            return {
              info,
              width: o * l,
              height: o,
            };
          }
          return {
            info,
            width: o,
            height: o / l,
          };
        }
      })(r, a, e, i);
      if (n) {
        return [n];
      }
      return [];
    })
    .sort((t, e) => r(t.width, t.height) - r(e.width, e.height));
  const v = a.FY()
    ? m.find((t) => Math.max(t.width, t.height) >= 1.5 * Math.max(e, i))
    : m.find((t) => t.width >= e && t.height >= i);
  if (
    (o =
      (l =
        (s = v == null ? undefined : v.info.videoUrl) != null
          ? s
          : (d = t.video) == null || (c = d.originVideo) == null
            ? undefined
            : c.videoUrl) != null
        ? l
        : (h = m.at(-1)) == null
          ? undefined
          : h.info.videoUrl) != null
  ) {
    return o;
  }
  return t.url;
}
Object.defineProperty(exports, "BY", {
  enumerable: true,
  get: () => 272,
});
Object.defineProperty(exports, "E9", {
  enumerable: true,
  get: () => 153,
});
