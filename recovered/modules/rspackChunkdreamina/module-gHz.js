import r from "oa";
import n from "bk";
import a from "./module-HrI.js";
const o = new Set([
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
function m(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function p(e, t) {
  if (m(e, t)) {
    const i = e[t];
    if (typeof i === "string" && i.trim()) {
      return i.trim();
    }
    return null;
  }
}
function h(e, t) {
  return t.every((t) => !m(e, t));
}
function v(
  contentGeneratorType,
  modelKey,
  featureType,
  resolution,
  durationMs,
) {
  if (
    o.has(contentGeneratorType) &&
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
          return r._(
            n._(
              r._(
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
        return r._(
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
        return r._(
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
    !!v(
      e.contentGeneratorType,
      p(e, "modelKey"),
      p(e, "featureType"),
      p(e, "resolution"),
      e.durationMs,
    )
  );
}
export function KX(e) {
  const t = ((e) => {
    let t = e;
    const i = typeof e === "string";
    if (i) {
      try {
        t = JSON.parse(e);
      } catch (e) {
        return;
      }
    }
    if (u(t) && (!i || Object.keys(t).every((e) => c.test(e)))) {
      const r = t;
      const n = {};
      if (m(r, "resolution")) {
        n.resolution = r.resolution;
      }
      for (const [a, o] of d) {
        const s = m(r, a);
        const l = m(r, o);
        if (s && l) {
          return;
        }
        if (s) {
          n[a] = r[a];
        } else if (l) {
          n[a] = r[o];
        }
      }
      return n;
    }
  })(e);
  if (t && typeof t.jump_type === "string") {
    const i = t.jump_type.trim();
    if (i === "none") {
      const r = t.jump_schema;
      if (
        (r !== undefined && (typeof r !== "string" || r.trim().length > 0)) ||
        !h(t, ["model_key", "feature_type"])
      ) {
        return;
      }
      return {
        type: "use-link",
      };
    }
    if (typeof t.jump_schema === "string" && t.jump_schema.trim()) {
      const n = t.jump_schema.trim();
      switch (i) {
        case "content_generator":
          const target = v(
            n,
            p(t, "model_key"),
            p(t, "feature_type"),
            p(t, "resolution"),
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
          if (!h(t, ["model_key", "feature_type"])) {
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
          })(n);
          if (href) {
            return {
              type: "open-url",
              href,
            };
          }
          return undefined;
        case "guide_overlay":
          if (n === a.j && h(t, ["model_key", "feature_type"])) {
            return {
              type: "guide-overlay",
              schema: a.j,
            };
          }
          return undefined;
        default:
          return;
      }
    }
  }
}
