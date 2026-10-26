import a from "TA";
function t(width, height) {
  if (width && height) {
    return width * height;
  }
  return 0;
}
function i(e) {
  return [
    ...new Set(
      e
        .map((e) => {
          if (e == null) {
            return undefined;
          }
          return e.trim();
        })
        .filter((e) => !!e),
    ),
  ];
}
function o(e) {
  let l;
  let n;
  let a;
  if (
    (n = [
      ...((l = (a = e.image) == null ? undefined : a.largeImages) != null
        ? l
        : []),
    ].sort((e, l) => t(l.width, l.height) - t(e.width, e.height))[0]) == null
  ) {
    return undefined;
  }
  return n.imageUrl;
}
export function ES(e) {
  let l;
  let n;
  if ((l = (n = e.commonAttr) == null ? undefined : n.coverUrlMap) != null) {
    return l;
  }
  return {};
}
export function r8(e) {
  let l;
  let n;
  let a;
  let t;
  let r;
  let s;
  if (e.type === "image") {
    return i([
      (s = e.commonAttr) == null ? undefined : s.coverUrl,
      o(e),
      e.url,
    ]);
  }
  return i([
    (n = e.commonAttr) == null ? undefined : n.coverUrl,
    (t = e.video) == null || (a = t.originVideo) == null
      ? undefined
      : a.coverUrl,
    ...Object.values(
      (l = (r = e.video) == null ? undefined : r.transcodedVideo) != null
        ? l
        : {},
    ).map((e) => e.coverUrl),
  ]);
}
export function ID(e) {
  let l;
  return ((l = e.coverUrl) == null ? undefined : l.trim()) || undefined;
}
export function qW(e, l) {
  const n = e[0];
  const a = e.find((e) => e.type === "image");
  const coverMedia = (n == null ? undefined : n.type) === "video" ? n : a;
  const coverImageUrl =
    (coverMedia == null ? undefined : coverMedia.type) === "video"
      ? ID(coverMedia)
      : undefined;
  const coverUrlMap = coverMedia ? ES(coverMedia) : {};
  const d = Object.keys(coverUrlMap).length > 0;
  if (coverImageUrl) {
    return {
      coverMedia,
      coverImageUrl,
      coverUrlMap,
      imageErrorFallbackUrls: d ? [coverImageUrl] : [],
    };
  }
  const u = coverMedia ? r8(coverMedia) : [];
  const m =
    (coverMedia == null ? undefined : coverMedia.type) === "video"
      ? [...new Set([...u, ...(l ? [l] : []), ...(a ? r8(a) : [])])]
      : u;
  return {
    coverMedia,
    coverImageUrl: m[0],
    coverUrlMap,
    imageErrorFallbackUrls: d ? m : m.slice(1),
  };
}
export function Z3(e, l) {
  let n;
  let a;
  let t;
  return i([
    e.type === "video" ? ID(e) : undefined,
    (a = e.commonAttr) == null ? undefined : a.coverUrl,
    ...Object.values(
      (n = (t = e.commonAttr) == null ? undefined : t.coverUrlMap) != null
        ? n
        : {},
    ),
    ...r8(e),
    e.type === "video" ? l : undefined,
  ])[0];
}
export function X5(e) {
  let l;
  if ((l = o(e)) != null) {
    return l;
  }
  return e.url;
}
export function iU(e, l, n) {
  let i;
  let o;
  let r;
  let s;
  let c;
  let d;
  let u;
  let m;
  const p = Object.entries(
    (i = (c = e.video) == null ? undefined : c.transcodedVideo) != null
      ? i
      : {},
  )
    .flatMap((e) => {
      var [a, t] = e;
      var i = ((info, l, n, a) => {
        if (info.width && info.height) {
          return {
            info,
            width: info.width,
            height: info.height,
          };
        }
        let t;
        let i;
        const o = Number(
          (i = ((t = info.definition) != null ? t : l).match(/\d+/)) == null
            ? undefined
            : i[0],
        );
        if (o) {
          const r = n && a ? n / a : 1;
          if (n > a) {
            return {
              info,
              width: o * r,
              height: o,
            };
          }
          return {
            info,
            width: o,
            height: o / r,
          };
        }
      })(t, a, l, n);
      if (i) {
        return [i];
      }
      return [];
    })
    .sort((e, l) => t(e.width, e.height) - t(l.width, l.height));
  const v = a.FY()
    ? p.find((e) => Math.max(e.width, e.height) >= 1.5 * Math.max(l, n))
    : p.find((e) => e.width >= l && e.height >= n);
  if (
    (o =
      (r =
        (s = v == null ? undefined : v.info.videoUrl) != null
          ? s
          : (u = e.video) == null || (d = u.originVideo) == null
            ? undefined
            : d.videoUrl) != null
        ? r
        : (m = p.at(-1)) == null
          ? undefined
          : m.info.videoUrl) != null
  ) {
    return o;
  }
  return e.url;
}
Object.defineProperty(exports, "BY", {
  enumerable: true,
  get: () => 272,
});
Object.defineProperty(exports, "E9", {
  enumerable: true,
  get: () => 153,
});
