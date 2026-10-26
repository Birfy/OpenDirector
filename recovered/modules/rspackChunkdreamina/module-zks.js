import a from "oa";
function r(t) {
  return (t == null ? undefined : t.trim()) || undefined;
}
function n(t) {
  const videoUrl = r(t == null ? undefined : t.videoUrl);
  if (t && videoUrl) {
    const vid = r(t.vid);
    const n = r(t.coverUrl);
    const o = r(t.format);
    const definition = r(t.definition);
    return a._(
      {
        videoUrl,
      },
      vid
        ? {
            vid,
          }
        : {},
      t.width
        ? {
            width: t.width,
          }
        : {},
      t.height
        ? {
            height: t.height,
          }
        : {},
      n
        ? {
            coverUrl: n,
          }
        : {},
      o
        ? {
            format: o,
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
export function j(t) {
  if (!(t == null ? undefined : t.length)) {
    return [];
  }
  const e = [];
  for (const i of t) {
    if (i.type === "image" || i.type === "video") {
      const commonAttr = ((t) => {
        let e;
        let i;
        let n;
        let o;
        const l = r((i = t.commonAttr) == null ? undefined : i.coverUri);
        const s = r((n = t.commonAttr) == null ? undefined : n.coverUrl);
        const coverUrlMap = (e =
          (o = t.commonAttr) == null ? undefined : o.coverUrlMap)
          ? Object.fromEntries(
              Object.entries(e).flatMap((t) => {
                var [e, i] = t;
                var a = e.trim();
                var n = r(i);
                if (a && n) {
                  return [[a, n]];
                }
                return [];
              }),
            )
          : {};
        if (l || s || Object.keys(coverUrlMap).length > 0) {
          return a._(
            {
              coverUrlMap,
            },
            l
              ? {
                  coverUri: l,
                }
              : {},
            s
              ? {
                  coverUrl: s,
                }
              : {},
          );
        }
      })(i);
      const image =
        i.type === "image"
          ? ((t) => {
              if (t.image) {
                let e;
                const largeImages = (
                  (e = t.image.largeImages) != null ? e : []
                ).flatMap((t) => {
                  var imageUrl = r(t.imageUrl);
                  if (!imageUrl) {
                    return [];
                  }
                  var imageUri = r(t.imageUri);
                  var n = r(t.format);
                  return [
                    a._(
                      {
                        imageUrl,
                      },
                      imageUri
                        ? {
                            imageUri,
                          }
                        : {},
                      t.width
                        ? {
                            width: t.width,
                          }
                        : {},
                      t.height
                        ? {
                            height: t.height,
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
                const n = r(t.image.format);
                if (n || largeImages.length > 0) {
                  return a._(
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
          ? ((t) => {
              if (t.video) {
                let e;
                const originVideo = n(t.video.originVideo);
                const transcodedVideo = Object.fromEntries(
                  Object.entries(
                    (e = t.video.transcodedVideo) != null ? e : {},
                  ).flatMap((t) => {
                    var [e, i] = t;
                    var a = e.trim();
                    var r = n(i);
                    if (a && r) {
                      return [[a, r]];
                    }
                    return [];
                  }),
                );
                if (originVideo || Object.keys(transcodedVideo).length > 0) {
                  return a._(
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
      const u = r(i.showcaseUrl);
      const c = r(i.coverUri);
      const d = r(i.coverUrl);
      const uri = r(i.showcaseUri);
      if (i.type === "image") {
        let m;
        let v;
        const p =
          (m =
            u != null
              ? u
              : image == null || (v = image.largeImages[0]) == null
                ? undefined
                : v.imageUrl) != null
            ? m
            : commonAttr == null
              ? undefined
              : commonAttr.coverUrl;
        if (!p) {
          continue;
        }
        e.push(
          a._(
            {
              type: "image",
              url: p,
            },
            uri
              ? {
                  uri,
                }
              : {},
            c
              ? {
                  coverUri: c,
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
        let f;
        let g;
        let y;
        let _;
        const k =
          (f =
            u != null
              ? u
              : video == null || (y = video.originVideo) == null
                ? undefined
                : y.videoUrl) != null
            ? f
            : (_ = Object.values(
                  (g = video == null ? undefined : video.transcodedVideo) !=
                    null
                    ? g
                    : {},
                )[0]) == null
              ? undefined
              : _.videoUrl;
        if (!k) {
          continue;
        }
        e.push(
          a._(
            {
              type: "video",
              url: k,
            },
            uri
              ? {
                  uri,
                }
              : {},
            c
              ? {
                  coverUri: c,
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
  return e;
}
