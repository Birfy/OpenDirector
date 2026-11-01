import i from "oa";
import a from "bk";
import o from "./module-HrI_2.js";
const n = new Set([
  "agentic",
  "image",
  "video",
  "digitalHuman",
  "actionCopy",
  "audio",
]);
const s = new Set([
  "omniReference",
  "videoEdit",
  "longVideo",
  "firstLastFrames",
  "multiFrames",
]);
const l = new Set(["http:", "https:"]);
const c = /^[a-z][a-z0-9]*(?:_[a-z0-9]+)*$/;
const d = [
  ["jump_type", "jumpType"],
  ["jump_schema", "jumpSchema"],
  ["model_key", "modelKey"],
  ["feature_type", "featureType"],
  ["duration_ms", "durationMs"],
];
function u(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
function v(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function h(e, t) {
  if (v(e, t)) {
    const r = e[t];
    if (typeof r === "string" && r.trim()) {
      return r.trim();
    }
    return null;
  }
}
function p(e, t) {
  return t.every((t) => !v(e, t));
}
function m(
  contentGeneratorType,
  modelKey,
  featureType,
  resolution,
  durationMs,
) {
  if (
    n.has(contentGeneratorType) &&
    modelKey !== null &&
    featureType !== null &&
    resolution !== null &&
    (resolution === undefined ||
      contentGeneratorType === "image" ||
      contentGeneratorType === "video") &&
    (durationMs === undefined ||
      (contentGeneratorType === "video" &&
        typeof durationMs === "number" &&
        Number.isFinite(durationMs) &&
        !(durationMs <= 0)))
  ) {
    switch (contentGeneratorType) {
      case "video":
        if (featureType) {
          if (!s.has(featureType)) {
            return;
          }
          return i._(
            a._(
              i._(
                {
                  contentGeneratorType: "video",
                },
                modelKey
                  ? {
                      modelKey,
                    }
                  : {},
              ),
              {
                featureType,
              },
            ),
            resolution
              ? {
                  resolution,
                }
              : {},
            typeof durationMs === "number"
              ? {
                  durationMs,
                }
              : {},
          );
        }
        return i._(
          {
            contentGeneratorType: "video",
          },
          modelKey
            ? {
                modelKey,
              }
            : {},
          resolution
            ? {
                resolution,
              }
            : {},
          typeof durationMs === "number"
            ? {
                durationMs,
              }
            : {},
        );
      case "image":
      case "digitalHuman":
      case "actionCopy":
        if (featureType !== undefined) {
          return;
        }
        return i._(
          {
            contentGeneratorType,
          },
          modelKey
            ? {
                modelKey,
              }
            : {},
          resolution
            ? {
                resolution,
              }
            : {},
        );
      case "agentic":
      case "audio":
        if (modelKey !== undefined || featureType !== undefined) {
          return;
        }
        return {
          contentGeneratorType,
        };
      default:
        return;
    }
  }
}
export function vC(e) {
  return (
    !!u(e) &&
    typeof e.contentGeneratorType === "string" &&
    !!m(
      e.contentGeneratorType,
      h(e, "modelKey"),
      h(e, "featureType"),
      h(e, "resolution"),
      e.durationMs,
    )
  );
}
export function KX(e) {
  const t = ((e) => {
    let t = e;
    const r = typeof e === "string";
    if (r) {
      try {
        t = JSON.parse(e);
      } catch (e) {
        return;
      }
    }
    if (u(t) && (!r || Object.keys(t).every((e) => c.test(e)))) {
      const i = t;
      const a = {};
      if (v(i, "resolution")) {
        a.resolution = i.resolution;
      }
      for (const [o, n] of d) {
        const s = v(i, o);
        const l = v(i, n);
        if (s && l) {
          return;
        }
        if (s) {
          a[o] = i[o];
        } else if (l) {
          a[o] = i[n];
        }
      }
      return a;
    }
  })(e);
  if (t && typeof t.jump_type === "string") {
    const r = t.jump_type.trim();
    if (r === "none") {
      const i = t.jump_schema;
      if (
        (i !== undefined && (typeof i !== "string" || i.trim().length > 0)) ||
        !p(t, ["model_key", "feature_type"])
      ) {
        return;
      }
      return {
        type: "use-link",
      };
    }
    if (typeof t.jump_schema === "string" && t.jump_schema.trim()) {
      const a = t.jump_schema.trim();
      switch (r) {
        case "content_generator":
          const target = m(
            a,
            h(t, "model_key"),
            h(t, "feature_type"),
            h(t, "resolution"),
            t.duration_ms,
          );
          if (target) {
            return {
              type: "content-generator",
              target,
            };
          }
          return undefined;
        case "href":
          if (!p(t, ["model_key", "feature_type"])) {
            return;
          }
          const href = ((e) => {
            try {
              const t = new URL(e);
              if (l.has(t.protocol)) {
                return t.href;
              }
              return undefined;
            } catch (e) {
              return;
            }
          })(a);
          if (href) {
            return {
              type: "open-url",
              href,
            };
          }
          return undefined;
        case "guide_overlay":
          if (a === o.j && p(t, ["model_key", "feature_type"])) {
            return {
              type: "guide-overlay",
              schema: o.j,
            };
          }
          return undefined;
        default:
          return;
      }
    }
  }
}
