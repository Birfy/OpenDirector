import t from "oa";
import n from "bk";
import i from "yMd";
import r from "crc";
import o from "KiZ";
function l(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
function s(e) {
  return (
    !!l(e) &&
    e.key === i.pH.UnifiedEdit &&
    (l(e.unifiedEditConfig) || l(e.unified_edit_config))
  );
}
function d(e) {
  if (typeof e === "number" && Number.isFinite(e)) {
    return e;
  }
}
function c(e) {
  const u = d(e);
  if (typeof u === "number") {
    return r.A(u);
  }
}
function m(e) {
  if (e) {
    const u = {
      maxCount: d(e.maxCount),
      minWidth: d(e.minWidth),
      maxWidth: d(e.maxWidth),
      minHeight: d(e.minHeight),
      maxHeight: d(e.maxHeight),
      minAspectRatio: d(e.minAspectRatio),
      maxAspectRatio: d(e.maxAspectRatio),
      maxFileSize: d(e.maxFileSize),
    };
    if (Object.values(u).some((e) => typeof e === "number")) {
      return u;
    }
    return undefined;
  }
}
function p(e) {
  if (e) {
    const u = m(e);
    const a = n._(t._({}, u != null ? u : {}), {
      maxCount: ((e) => {
        const u = d(e);
        if (typeof u === "number") {
          return Math.max(u - 1, 0);
        }
      })(e.maxCount),
      minDuration: d(e.minDuration),
      maxDuration: d(e.maxDuration),
      minTotalPixels: d(e.minTotalPixels),
      maxTotalPixels: d(e.maxTotalPixels),
    });
    if (Object.values(a).some((e) => typeof e === "number")) {
      return a;
    }
    return undefined;
  }
}
function v(e) {
  if (e) {
    const u = {
      maxCount: d(e.maxCount),
      minDuration: d(e.minDuration),
      maxDuration: d(e.maxDuration),
      maxFileSize: d(e.maxFileSize),
    };
    if (Object.values(u).some((e) => typeof e === "number")) {
      return u;
    }
    return undefined;
  }
}
function F(e) {
  return Object.values(e).some(
    (e) =>
      typeof e === "number" ||
      (l(e) && Object.values(e).some((e) => typeof e === "number")),
  );
}
export function q(e) {
  const u =
    e == null ? undefined : e.fields.find((e) => e.type === i.pH.UnifiedEdit);
  if (u) {
    const { materialCombinationRule, materialLimits } = u;
    const l = {
      maxTotalCount: d(o.e(materialCombinationRule)),
      maxTotalVideoDuration: d(o.x(materialCombinationRule, "video")),
      maxTotalAudioDuration: d(o.x(materialCombinationRule, "audio")),
      image: m(
        n._(t._({}, materialLimits.image), {
          maxCount: o.e(materialCombinationRule, ["image"]),
        }),
      ),
      video: p(
        n._(t._({}, materialLimits.video), {
          maxCount: o.e(materialCombinationRule, ["video"]),
        }),
      ),
      audio: v(
        n._(t._({}, materialLimits.audio), {
          maxCount: o.e(materialCombinationRule, ["audio"]),
        }),
      ),
    };
    if (F(l)) {
      return l;
    }
    return undefined;
  }
}
function h(e) {
  let u;
  let a;
  let t;
  let n;
  let r;
  let o;
  let l;
  let A;
  let h;
  const E =
    (a = (l = e.originalInput) == null ? undefined : l.videoModelConfig) != null
      ? a
      : e.videoModelConfig;
  const f =
    (u = E == null ? undefined : E.options) == null ? undefined : u.find(s);
  const D = f == null ? undefined : f.unifiedEditConfig;
  const b = f == null ? undefined : f.unified_edit_config;
  if (D || b) {
    const g = {
      maxTotalCount: d(
        (t = D == null ? undefined : D.maxTotalCount) != null
          ? t
          : b == null
            ? undefined
            : b.max_total_count,
      ),
      maxTotalVideoDuration: d(
        (n = D == null ? undefined : D.maxTotalVideoDuration) != null
          ? n
          : b == null
            ? undefined
            : b.max_total_video_duration,
      ),
      maxTotalAudioDuration: d(
        (r = D == null ? undefined : D.maxTotalAudioDuration) != null
          ? r
          : b == null
            ? undefined
            : b.max_total_audio_duration,
      ),
    };
    const C =
      (o =
        D == null || (A = D.supportedMaterials) == null
          ? undefined
          : A.map((e) => {
              var u;
              var a;
              var t;
              var n;
              var i;
              var r;
              var o;
              var l;
              var s;
              var d;
              var m;
              var p;
              return {
                materialType: e.materialType,
                limit: {
                  maxCount: (u = e.limit) == null ? undefined : u.maxCount,
                  minDuration:
                    (a = e.limit) == null ? undefined : a.minDuration,
                  maxDuration:
                    (t = e.limit) == null ? undefined : t.maxDuration,
                  minHeight: (n = e.limit) == null ? undefined : n.minHeight,
                  maxHeight: (i = e.limit) == null ? undefined : i.maxHeight,
                  minWidth: (r = e.limit) == null ? undefined : r.minWidth,
                  maxWidth: (o = e.limit) == null ? undefined : o.maxWidth,
                  maxFileSize: c(
                    (l = e.limit) == null ? undefined : l.maxFileSize,
                  ),
                  minAspectRatio:
                    (s = e.limit) == null ? undefined : s.minAspectRatio,
                  maxAspectRatio:
                    (d = e.limit) == null ? undefined : d.maxAspectRatio,
                  minTotalPixels:
                    (m = e.limit) == null ? undefined : m.minTotalPixels,
                  maxTotalPixels:
                    (p = e.limit) == null ? undefined : p.maxTotalPixels,
                },
              };
            })) != null
        ? o
        : b == null || (h = b.supported_materials) == null
          ? undefined
          : h.map((e) => {
              var u;
              var a;
              var t;
              var n;
              var i;
              var r;
              var o;
              var l;
              var s;
              var d;
              var m;
              var p;
              return {
                materialType: e.material_type,
                limit: {
                  maxCount: (u = e.limit) == null ? undefined : u.max_count,
                  minDuration:
                    (a = e.limit) == null ? undefined : a.min_duration,
                  maxDuration:
                    (t = e.limit) == null ? undefined : t.max_duration,
                  minHeight: (n = e.limit) == null ? undefined : n.min_height,
                  maxHeight: (i = e.limit) == null ? undefined : i.max_height,
                  minWidth: (r = e.limit) == null ? undefined : r.min_width,
                  maxWidth: (o = e.limit) == null ? undefined : o.max_width,
                  maxFileSize: c(
                    (l = e.limit) == null ? undefined : l.max_file_size,
                  ),
                  minAspectRatio:
                    (s = e.limit) == null ? undefined : s.min_aspect_ratio,
                  maxAspectRatio:
                    (d = e.limit) == null ? undefined : d.max_aspect_ratio,
                  minTotalPixels:
                    (m = e.limit) == null ? undefined : m.min_total_pixels,
                  maxTotalPixels:
                    (p = e.limit) == null ? undefined : p.max_total_pixels,
                },
              };
            });
    if (C != null) {
      C.forEach((e) => {
        switch (e.materialType) {
          case i.Mt.Image:
            g.image = m(e.limit);
            break;
          case i.Mt.Video:
            g.video = p(e.limit);
            break;
          case i.Mt.Audio:
            g.audio = v(e.limit);
        }
      });
    }
    if (F(g)) {
      return g;
    }
    return undefined;
  }
}
export { h as i };
