import { FY } from "./module-TA.js";
function n(width, height) {
  if (width && height) {
    return width * height;
  }
  return 0;
}
function a(e) {
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
  let t;
  let i;
  let r;
  if (
    (i = [
      ...((t = (r = e.image) == null ? undefined : r.largeImages) != null
        ? t
        : []),
    ].sort((e, t) => n(t.width, t.height) - n(e.width, e.height))[0]) == null
  ) {
    return undefined;
  }
  return i.imageUrl;
}
export function ES(e) {
  let t;
  let i;
  if ((t = (i = e.commonAttr) == null ? undefined : i.coverUrlMap) != null) {
    return t;
  }
  return {};
}
export function r8(e) {
  let t;
  let i;
  let r;
  let n;
  let s;
  let l;
  if (e.type === "image") {
    return a([
      (l = e.commonAttr) == null ? undefined : l.coverUrl,
      o(e),
      e.url,
    ]);
  }
  return a([
    (i = e.commonAttr) == null ? undefined : i.coverUrl,
    (n = e.video) == null || (r = n.originVideo) == null
      ? undefined
      : r.coverUrl,
    ...Object.values(
      (t = (s = e.video) == null ? undefined : s.transcodedVideo) != null
        ? t
        : {},
    ).map((e) => e.coverUrl),
  ]);
}
export function ID(e) {
  let t;
  return ((t = e.coverUrl) == null ? undefined : t.trim()) || undefined;
}
export function qW(e, t) {
  const i = e[0];
  const r = e.find((e) => e.type === "image");
  const coverMedia = (i == null ? undefined : i.type) === "video" ? i : r;
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
      ? [...new Set([...u, ...(t ? [t] : []), ...(r ? r8(r) : [])])]
      : u;
  return {
    coverMedia,
    coverImageUrl: m[0],
    coverUrlMap,
    imageErrorFallbackUrls: d ? m : m.slice(1),
  };
}
export function Z3(e, t) {
  let i;
  let r;
  let n;
  return a([
    e.type === "video" ? ID(e) : undefined,
    (r = e.commonAttr) == null ? undefined : r.coverUrl,
    ...Object.values(
      (i = (n = e.commonAttr) == null ? undefined : n.coverUrlMap) != null
        ? i
        : {},
    ),
    ...r8(e),
    e.type === "video" ? t : undefined,
  ])[0];
}
export function X5(e) {
  let t;
  if ((t = o(e)) != null) {
    return t;
  }
  return e.url;
}
export function iU(e, t, i) {
  let a;
  let o;
  let s;
  let l;
  let c;
  let d;
  let u;
  let m;
  const p = Object.entries(
    (a = (c = e.video) == null ? undefined : c.transcodedVideo) != null
      ? a
      : {},
  )
    .flatMap((e) => {
      var [r, n] = e;
      var a = ((info, t, i, r) => {
        if (info.width && info.height) {
          return {
            info,
            width: info.width,
            height: info.height,
          };
        }
        let n;
        let a;
        const o = Number(
          (a = ((n = info.definition) != null ? n : t).match(/\d+/)) == null
            ? undefined
            : a[0],
        );
        if (o) {
          const s = i && r ? i / r : 1;
          if (i > r) {
            return {
              info,
              width: o * s,
              height: o,
            };
          }
          return {
            info,
            width: o,
            height: o / s,
          };
        }
      })(n, r, t, i);
      if (a) {
        return [a];
      }
      return [];
    })
    .sort((e, t) => n(e.width, e.height) - n(t.width, t.height));
  const h = FY()
    ? p.find((e) => Math.max(e.width, e.height) >= 1.5 * Math.max(t, i))
    : p.find((e) => e.width >= t && e.height >= i);
  if (
    (o =
      (s =
        (l = h == null ? undefined : h.info.videoUrl) != null
          ? l
          : (u = e.video) == null || (d = u.originVideo) == null
            ? undefined
            : d.videoUrl) != null
        ? s
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
