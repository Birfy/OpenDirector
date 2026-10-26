import r from "oa";
function a(e) {
  return (e == null ? undefined : e.trim()) || undefined;
}
function n(e) {
  const videoUrl = a(e == null ? undefined : e.videoUrl);
  if (e && videoUrl) {
    const vid = a(e.vid);
    const n = a(e.coverUrl);
    const s = a(e.format);
    const definition = a(e.definition);
    return r._(
      {
        videoUrl,
      },
      vid
        ? {
            vid,
          }
        : {},
      e.width
        ? {
            width: e.width,
          }
        : {},
      e.height
        ? {
            height: e.height,
          }
        : {},
      n
        ? {
            coverUrl: n,
          }
        : {},
      s
        ? {
            format: s,
          }
        : {},
      definition
        ? {
            definition,
          }
        : {},
    );
  }
}
export function j(e) {
  if (!(e == null ? undefined : e.length)) {
    return [];
  }
  const t = [];
  for (const i of e) {
    if (i.type === "image" || i.type === "video") {
      const commonAttr = ((e) => {
        let t;
        let i;
        let n;
        let s;
        const o = a((i = e.commonAttr) == null ? undefined : i.coverUri);
        const l = a((n = e.commonAttr) == null ? undefined : n.coverUrl);
        const coverUrlMap = (t =
          (s = e.commonAttr) == null ? undefined : s.coverUrlMap)
          ? Object.fromEntries(
              Object.entries(t).flatMap((e) => {
                var [t, i] = e;
                var r = t.trim();
                var n = a(i);
                if (r && n) {
                  return [[r, n]];
                }
                return [];
              }),
            )
          : {};
        if (o || l || Object.keys(coverUrlMap).length > 0) {
          return r._(
            {
              coverUrlMap,
            },
            o
              ? {
                  coverUri: o,
                }
              : {},
            l
              ? {
                  coverUrl: l,
                }
              : {},
          );
        }
      })(i);
      const image =
        i.type === "image"
          ? ((e) => {
              if (e.image) {
                let t;
                const largeImages = (
                  (t = e.image.largeImages) != null ? t : []
                ).flatMap((e) => {
                  var imageUrl = a(e.imageUrl);
                  if (!imageUrl) {
                    return [];
                  }
                  var imageUri = a(e.imageUri);
                  var n = a(e.format);
                  return [
                    r._(
                      {
                        imageUrl,
                      },
                      imageUri
                        ? {
                            imageUri,
                          }
                        : {},
                      e.width
                        ? {
                            width: e.width,
                          }
                        : {},
                      e.height
                        ? {
                            height: e.height,
                          }
                        : {},
                      n
                        ? {
                            format: n,
                          }
                        : {},
                    ),
                  ];
                });
                const n = a(e.image.format);
                if (n || largeImages.length > 0) {
                  return r._(
                    {
                      largeImages,
                    },
                    n
                      ? {
                          format: n,
                        }
                      : {},
                  );
                }
                return undefined;
              }
            })(i)
          : undefined;
      const video =
        i.type === "video"
          ? ((e) => {
              if (e.video) {
                let t;
                const originVideo = n(e.video.originVideo);
                const transcodedVideo = Object.fromEntries(
                  Object.entries(
                    (t = e.video.transcodedVideo) != null ? t : {},
                  ).flatMap((e) => {
                    var [t, i] = e;
                    var r = t.trim();
                    var a = n(i);
                    if (r && a) {
                      return [[r, a]];
                    }
                    return [];
                  }),
                );
                if (originVideo || Object.keys(transcodedVideo).length > 0) {
                  return r._(
                    {
                      transcodedVideo,
                    },
                    originVideo
                      ? {
                          originVideo,
                        }
                      : {},
                  );
                }
                return undefined;
              }
            })(i)
          : undefined;
      const c = a(i.showcaseUrl);
      const u = a(i.coverUri);
      const d = a(i.coverUrl);
      const uri = a(i.showcaseUri);
      if (i.type === "image") {
        let p;
        let g;
        const v =
          (p =
            c != null
              ? c
              : image == null || (g = image.largeImages[0]) == null
                ? undefined
                : g.imageUrl) != null
            ? p
            : commonAttr == null
              ? undefined
              : commonAttr.coverUrl;
        if (!v) {
          continue;
        }
        t.push(
          r._(
            {
              type: "image",
              url: v,
            },
            uri
              ? {
                  uri,
                }
              : {},
            u
              ? {
                  coverUri: u,
                }
              : {},
            d
              ? {
                  coverUrl: d,
                }
              : {},
            commonAttr
              ? {
                  commonAttr,
                }
              : {},
            image
              ? {
                  image,
                }
              : {},
          ),
        );
      } else {
        let m;
        let f;
        let _;
        let k;
        const y =
          (m =
            c != null
              ? c
              : video == null || (_ = video.originVideo) == null
                ? undefined
                : _.videoUrl) != null
            ? m
            : (k = Object.values(
                  (f = video == null ? undefined : video.transcodedVideo) !=
                    null
                    ? f
                    : {},
                )[0]) == null
              ? undefined
              : k.videoUrl;
        if (!y) {
          continue;
        }
        t.push(
          r._(
            {
              type: "video",
              url: y,
            },
            uri
              ? {
                  uri,
                }
              : {},
            u
              ? {
                  coverUri: u,
                }
              : {},
            d
              ? {
                  coverUrl: d,
                }
              : {},
            commonAttr
              ? {
                  commonAttr,
                }
              : {},
            video
              ? {
                  video,
                }
              : {},
          ),
        );
      }
    }
  }
  return t;
}
