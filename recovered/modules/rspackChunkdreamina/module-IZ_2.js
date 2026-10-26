import r from "oa";
import n from "bk";
import { Uf, dQ, gs, h as h_1, on, u4 } from "./module-mgY.js";
function o(e) {
  for (
    var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  ) {
    i[r - 1] = arguments[r];
  }
  if (e) {
    return i
      .map((t) => on(e, t))
      .find((e) => !!(e == null ? undefined : e.trim()));
  }
}
function s(e) {
  for (
    var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  ) {
    i[r - 1] = arguments[r];
  }
  if (e) {
    return i
      .map((t) => Uf(e, t))
      .find((e) => typeof e === "number" && Number.isFinite(e));
  }
}
function l(e) {
  for (
    var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  ) {
    i[r - 1] = arguments[r];
  }
  if (e) {
    return i.map((t) => gs(e, t)).find(Boolean);
  }
}
function d(e) {
  let t;
  const i = l(e, "commonAttr", "common_attr");
  if ((t = o(e, "id")) != null) {
    return t;
  }
  return o(i, "id");
}
function c(item) {
  return l(item, "commonAttr", "common_attr");
}
function u(e, t) {
  let i;
  let r;
  let n;
  if (
    (i =
      (r = (n = e.presentation) == null ? undefined : n.title) != null
        ? r
        : e.title) != null
  ) {
    return i;
  }
  return o(t, "title", "description", "prompt");
}
function h(e, t) {
  let i;
  let r;
  let n;
  let a;
  let s;
  let d;
  if (
    (i =
      (r = o(l(t.aigcData, "idModel", "id_model"), "recordId", "record_id")) !=
      null
        ? r
        : o(t.aigcData, "historyRecordId", "history_record_id")) != null
  ) {
    return i;
  }
  return (
    ((a = e.sourceRef) == null || (n = a.recordId) == null
      ? undefined
      : n.trim()) ||
    ((d = e.sourceRef) == null || (s = d.historyRecordId) == null
      ? undefined
      : s.trim())
  );
}
function v(e, t) {
  let i;
  let r;
  const n = (i = s(e, "duration")) != null ? i : s(t, "duration");
  if (n !== undefined) {
    return n;
  }
  const a =
    (r = s(e, "durationMs", "duration_ms")) != null
      ? r
      : s(t, "durationMs", "duration_ms");
  if (a === undefined) {
    return undefined;
  }
  return a / 1000;
}
export function q(e) {
  const t = ((e) => {
    let t;
    let i;
    let r;
    const aigcData = ((e) => {
      const e_detailData = e.detailData;
      if (
        e_detailData &&
        e_detailData.assetType === e.assetType &&
        "aigcData" in e_detailData &&
        u4(e_detailData.aigcData)
      ) {
        return e_detailData.aigcData;
      }
      const e_summaryData = e.summaryData;
      if (
        e_summaryData &&
        e_summaryData.assetType === e.assetType &&
        "aigcData" in e_summaryData &&
        u4(e_summaryData.aigcData)
      ) {
        return e_summaryData.aigcData;
      }
      if (
        e_summaryData &&
        e_summaryData.assetType === e.assetType &&
        "searchRecord" in e_summaryData &&
        u4(e_summaryData.searchRecord)
      ) {
        return e_summaryData.searchRecord;
      }
    })(e);
    const o = Array.isArray(
      (i =
        (t = aigcData == null ? undefined : aigcData.itemList) != null
          ? t
          : aigcData == null
            ? undefined
            : aigcData.item_list),
    )
      ? i.filter(u4)
      : [];
    const s =
      (r = e.itemLocators) == null
        ? undefined
        : r.find((t) => t.assetType === e.assetType && t.assetId === e.assetId);
    if (s == null ? undefined : s.itemId) {
      const l = o.find((e) => d(e) === s.itemId);
      if (l) {
        return {
          aigcData,
          item: l,
          itemId: s.itemId,
        };
      }
    }
    if ((s == null ? undefined : s.itemIndex) !== undefined) {
      const c = o[s.itemIndex];
      if (c) {
        return {
          aigcData,
          item: c,
          itemId: d(c),
        };
      }
    }
    const u = o.length === 1 ? o[0] : undefined;
    return {
      aigcData,
      item: u,
      itemId: d(u),
    };
  })(e);
  switch (e.assetType) {
    case "image":
      return ((e, t) => {
        let i;
        let n;
        let d;
        let v;
        let p;
        let m;
        let g;
        let _;
        let f;
        let y;
        let b;
        let S;
        let I;
        let w;
        let T;
        let C;
        let A;
        let k;
        let x;
        let j;
        const R = c(t.item);
        const E =
          Array.isArray(
            (d =
              (i =
                (n = l(t.item, "image", "image_data")) == null
                  ? undefined
                  : n.largeImages) != null
                ? i
                : n == null
                  ? undefined
                  : n.large_images),
          ) && u4(d[0])
            ? d[0]
            : n;
        const M =
          (v = o(E, "imageUri", "image_uri", "uri")) != null
            ? v
            : o(R, "coverUri", "cover_uri");
        if (!M) {
          return {
            selectable: false,
            reason: "missing-stable-handle",
          };
        }
        const F =
          (p =
            (m =
              (g =
                (_ =
                  (f = (k = e.presentation) == null ? undefined : k.imageUrl) !=
                  null
                    ? f
                    : (x = e.presentation) == null
                      ? undefined
                      : x.coverUrl) != null
                  ? _
                  : e.cover) != null
                ? g
                : o(
                    E,
                    "imageUrl",
                    "image_url",
                    "originUrl",
                    "origin_url",
                    "url",
                  )) != null
              ? m
              : o(R, "coverUrl", "cover_url")) != null
            ? p
            : (j = (function (e) {
                  for (
                    var t = arguments.length,
                      i = Array(t > 1 ? t - 1 : 0),
                      r = 1;
                    r < t;
                    r++
                  ) {
                    i[r - 1] = arguments[r];
                  }
                  if (e) {
                    return i
                      .map((t) => dQ(e, t))
                      .find((e) => {
                        if (e == null) {
                          return undefined;
                        }
                        return e.length;
                      });
                  }
                })(R, "itemUrls", "item_urls")) == null
              ? undefined
              : j[0];
        if (!F) {
          return {
            selectable: false,
            reason: "missing-preview",
          };
        }
        const P = u(e, R);
        const U =
          (y =
            (b = o(R, "title", "prompt", "description")) != null
              ? b
              : o(
                  l(t.item, "text2imageParams", "text2image_params"),
                  "prompt",
                )) != null
            ? y
            : o(t.aigcData, "prompt");
        const N = h(e, t);
        return {
          selectable: true,
          source: r._(
            {
              kind: "image",
              assetId: e.assetId,
              storageKey: M,
              url: F,
            },
            t.itemId
              ? {
                  aigcItemId: t.itemId,
                }
              : {},
            P
              ? {
                  name: P,
                }
              : {},
            U
              ? {
                  title: U,
                }
              : {},
            N
              ? {
                  historyId: N,
                }
              : {},
            (
              (S = s(E, "width")) != null
                ? S
                : s(R, "coverWidth", "cover_width")
            )
              ? {
                  width:
                    (I = s(E, "width")) != null
                      ? I
                      : s(R, "coverWidth", "cover_width"),
                }
              : {},
            (
              (w = s(E, "height")) != null
                ? w
                : s(R, "coverHeight", "cover_height")
            )
              ? {
                  height:
                    (T = s(E, "height")) != null
                      ? T
                      : s(R, "coverHeight", "cover_height"),
                }
              : {},
            o(E, "format")
              ? {
                  format: o(E, "format"),
                }
              : {},
            (
              (C = h_1(E != null ? E : {}, "coverUrlMap")) != null
                ? C
                : h_1(E != null ? E : {}, "cover_url_map")
            )
              ? {
                  resolutionUrlMap:
                    (A = h_1(E != null ? E : {}, "coverUrlMap")) != null
                      ? A
                      : h_1(E != null ? E : {}, "cover_url_map"),
                }
              : {},
          ),
        };
      })(e, t);
    case "video":
      return ((e, t) => {
        let i;
        let n;
        let a;
        let d;
        let p;
        let m;
        let g;
        let _;
        let f;
        let y;
        let b;
        let S;
        let I;
        let w;
        let T;
        let C;
        let A;
        let k;
        let x;
        let j;
        let R;
        let E;
        let M;
        let F;
        let P;
        let U;
        const N = c(t.item);
        const O = l(t.item, "video");
        const W = l(t.aigcData, "video");
        const D = O != null ? O : W;
        const H = l(D, "originVideo", "origin_video");
        const z =
          (b = o(D, "vid", "videoId", "video_id")) != null
            ? b
            : o(H, "vid", "videoId", "video_id");
        if (!z) {
          return {
            selectable: false,
            reason: "missing-stable-handle",
          };
        }
        const L =
          (S = (M = e.presentation) == null ? undefined : M.videoUrl) != null
            ? S
            : ((m = l((i = D), "transcodedVideo", "transcoded_video")),
              (g = l(i, "originVideo", "origin_video")),
              (_ = l(m, "720p", "720")),
              (f = l(m, "360p", "360")),
              (y = l(m, "origin")),
              (n =
                (a =
                  (d =
                    (p = o(_, "videoUrl", "video_url", "url")) != null
                      ? p
                      : o(f, "videoUrl", "video_url", "url")) != null
                    ? d
                    : o(y, "videoUrl", "video_url", "url")) != null
                  ? a
                  : o(g, "videoUrl", "video_url", "url")) != null
                ? n
                : o(i, "videoUrl", "video_url", "url"));
        if (!L) {
          return {
            selectable: false,
            reason: "missing-preview",
          };
        }
        const K = l(D, "thumb");
        const $ =
          (I =
            (w =
              (T =
                (C =
                  (A = (F = e.presentation) == null ? undefined : F.coverUrl) !=
                  null
                    ? A
                    : e.cover) != null
                  ? C
                  : o(N, "coverUrl", "cover_url")) != null
                ? T
                : o(D, "coverUrl", "cover_url")) != null
              ? w
              : o(H, "coverUrl", "cover_url")) != null
            ? I
            : o(K, "url");
        const width = (k = s(D, "width")) != null ? k : s(H, "width");
        const height = (x = s(D, "height")) != null ? x : s(H, "height");
        const Z =
          (j = (P = e.presentation) == null ? undefined : P.durationSeconds) !=
          null
            ? j
            : v(D, H);
        const Q = (R = o(D, "format")) != null ? R : o(H, "format");
        const submitId = (U = e.sourceRef) == null ? undefined : U.submitId;
        const J = (E = u(e, N)) != null ? E : o(D, "title");
        const X = o(N, "title", "prompt", "description");
        const G = h(e, t);
        return {
          selectable: true,
          source: r._(
            {
              kind: "video",
              assetId: e.assetId,
              storageKey: z,
              url: L,
            },
            t.itemId
              ? {
                  aigcItemId: t.itemId,
                }
              : {},
            J
              ? {
                  name: J,
                }
              : {},
            X
              ? {
                  title: X,
                }
              : {},
            G
              ? {
                  historyId: G,
                }
              : {},
            $
              ? {
                  coverUrl: $,
                }
              : {},
            width !== undefined
              ? {
                  width,
                }
              : {},
            height !== undefined
              ? {
                  height,
                }
              : {},
            Z !== undefined
              ? {
                  duration: Z,
                }
              : {},
            Q
              ? {
                  format: Q,
                }
              : {},
            submitId
              ? {
                  submitId,
                }
              : {},
          ),
        };
      })(e, t);
    case "audio":
      return ((e, t) => {
        let i;
        let n;
        let a;
        let s;
        let d;
        let h;
        let p;
        let m;
        let g;
        let _;
        let f;
        let y;
        let b;
        let S;
        let I;
        let w;
        const T = c(t.item);
        const C = l(t.item, "audio");
        const A = l(C, "originAudio", "origin_audio");
        const k = (i = o(C, "vid")) != null ? i : o(A, "vid");
        if (!k) {
          return {
            selectable: false,
            reason: "missing-stable-handle",
          };
        }
        const x =
          (n =
            (a = (b = e.presentation) == null ? undefined : b.audioUrl) != null
              ? a
              : o(A, "audioUrl", "audio_url", "url")) != null
            ? n
            : o(C, "audioUrl", "audio_url", "url");
        if (!x) {
          return {
            selectable: false,
            reason: "missing-preview",
          };
        }
        const j =
          (s =
            (d =
              (h =
                (p = (S = e.presentation) == null ? undefined : S.coverUrl) !=
                null
                  ? p
                  : e.cover) != null
                ? h
                : o(T, "coverUrl", "cover_url")) != null
              ? d
              : o(A, "coverUrl", "cover_url")) != null
            ? s
            : o(C, "coverUrl", "cover_url");
        const R =
          (m = (I = e.presentation) == null ? undefined : I.durationSeconds) !=
          null
            ? m
            : ((w = e.presentation) == null ? undefined : w.durationMs) !==
                undefined
              ? e.presentation.durationMs / 1000
              : v(C, A);
        const E = (g = o(A, "format")) != null ? g : o(C, "format");
        const M =
          (_ =
            (f = (y = u(e, T)) != null ? y : o(C, "title")) != null
              ? f
              : o(A, "title")) != null
            ? _
            : o(t.item, "audioTitle", "audio_title");
        return {
          selectable: true,
          source: r._(
            {
              kind: "audio",
              assetId: e.assetId,
              storageKey: k,
              url: x,
            },
            t.itemId
              ? {
                  aigcItemId: t.itemId,
                }
              : {},
            M
              ? {
                  name: M,
                }
              : {},
            j
              ? {
                  coverUrl: j,
                }
              : {},
            R !== undefined
              ? {
                  duration: R,
                }
              : {},
            E
              ? {
                  format: E,
                }
              : {},
            M
              ? {
                  title: M,
                }
              : {},
          ),
        };
      })(e, t);
    case "document":
      return ((e, t) => {
        let i;
        let a;
        let s;
        let d;
        let u;
        let h;
        let v;
        let p;
        let m;
        let g;
        const _ = c(t.item);
        const f = l(_, "file");
        const y = (m = e.presentation) == null ? undefined : m.document;
        const b =
          (i = y == null ? undefined : y.fileUri) != null
            ? i
            : o(f, "fileUri", "file_uri", "uri");
        if (!b) {
          return {
            selectable: false,
            reason: "missing-stable-handle",
          };
        }
        const S =
          (a = y == null ? undefined : y.fileUrl) != null
            ? a
            : o(f, "fileUrl", "file_url", "url");
        if (!S) {
          return {
            selectable: false,
            reason: "missing-preview",
          };
        }
        const I =
          (s =
            (d =
              (u =
                (h =
                  (v = y == null ? undefined : y.fileName) != null
                    ? v
                    : (g = e.presentation) == null
                      ? undefined
                      : g.title) != null
                  ? h
                  : e.title) != null
                ? u
                : o(_, "title", "description")) != null
              ? d
              : b.split("/").pop()) != null
            ? s
            : "document";
        const w =
          (p = y == null ? undefined : y.format) != null ? p : o(_, "format");
        return {
          selectable: true,
          source: r._(
            n._(
              r._(
                {
                  kind: "document",
                  assetId: e.assetId,
                  storageKey: b,
                  url: S,
                  fileName: I,
                },
                t.itemId
                  ? {
                      aigcItemId: t.itemId,
                    }
                  : {},
              ),
              {
                name: I,
              },
            ),
            w
              ? {
                  format: w,
                }
              : {},
            (y == null ? undefined : y.mimeType)
              ? {
                  mimeType: y.mimeType,
                }
              : {},
          ),
        };
      })(e, t);
    default:
      return {
        selectable: false,
        reason: "unsupported-asset-type",
      };
  }
}
