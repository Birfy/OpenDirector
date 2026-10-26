import a from "oa";
import o from "bk";
import s from "K8";
function c(e, imageUrlMap) {
  if (
    !(
      !e ||
      !imageUrlMap ||
      typeof imageUrlMap !== "object" ||
      Array.isArray(imageUrlMap)
    )
  ) {
    const i = imageUrlMap[e];
    if (typeof i === "string" && i.trim().length > 0) {
      return i;
    }
    return undefined;
  }
}
export var Ld = {
  Tool: "tool",
  CanvasTool: "canvas_tool",
  CanvasTemplate: "canvas_template",
  Generation: "generation",
  OpenGenerator: "open_generator",
  Link: "link",
};
export var E_ = {
  SameTab: "same_tab",
  NewTab: "new_tab",
};
export function lN(e) {
  if (e.scene) {
    return JSON.stringify([e.scene, e.panelKey, e.id]);
  }
  return e.id;
}
function v(e) {
  return e !== null && typeof e === "object" && !Array.isArray(e);
}
function m(e) {
  if (typeof e === "string" && e.trim().length > 0) {
    return e;
  }
}
function p(e) {
  if (e.generateType === "digitalHuman") {
    if (
      [e.digitalHumanModelKey, e.speech, e.prompt].some(
        (e) => e != null && typeof e !== "string",
      )
    ) {
      return;
    }
    return {
      generateType: "digitalHuman",
      modelKey: m(e.digitalHumanModelKey),
      speech: typeof e.speech === "string" ? e.speech : undefined,
      prompt: typeof e.prompt === "string" ? e.prompt : undefined,
    };
  }
  if (
    !(
      (e.generateType !== "image" && e.generateType !== "video") ||
      [
        e.prompt,
        e.aspectRatio,
        e.resolution,
        e.generateType === "image" ? e.imageModelKey : e.videoModelKey,
        e.generateType === "video" ? e.videoGenerationMode : undefined,
      ].some((e) => e != null && typeof e !== "string")
    )
  ) {
    let t;
    let i;
    let n;
    const r = (t = e.generateCount) != null ? t : undefined;
    const a =
      e.generateType === "video" && (i = e.videoDurationSeconds) != null
        ? i
        : undefined;
    if (
      (r === undefined ||
        (typeof r === "number" && Number.isInteger(r) && !(r <= 0))) &&
      (a === undefined ||
        (typeof a === "number" && Number.isFinite(a) && !(a <= 0)))
    ) {
      const o = (n = e.referenceImageUris) != null ? n : undefined;
      if (!(o !== undefined && (!Array.isArray(o) || o.some((e) => !m(e))))) {
        return {
          generateType: e.generateType,
          prompt: typeof e.prompt === "string" ? e.prompt : undefined,
          modelKey: m(
            e.generateType === "image" ? e.imageModelKey : e.videoModelKey,
          ),
          referenceImages: Array.isArray(o)
            ? o.map((imageUri) => ({
                imageUri,
                imageUrl: c(imageUri, e.imageUrlMap),
              }))
            : undefined,
          aspectRatio: m(e.aspectRatio),
          resolution: m(e.resolution),
          generateCount: typeof r === "number" ? r : undefined,
          generationMode:
            e.generateType === "video" ? m(e.videoGenerationMode) : undefined,
          durationSeconds: typeof a === "number" ? a : undefined,
        };
      }
    }
  }
}
function _(e) {
  if (v(e)) {
    let t;
    const id = m(e.itemCode);
    const title = m(e.titleFallback);
    const action = ((e) => {
      switch (e.actionType) {
        case "tool":
          const toolKey = m(e.modalToolKey);
          if (toolKey) {
            return {
              type: "tool",
              toolKey,
            };
          }
          return undefined;
        case "open_generator":
          const i = p(
            o._(a._({}, e), {
              generateType: e.generatorType,
              digitalHumanModelKey: e.digitalHumanGeneratorModelKey,
              imageModelKey: e.imageGeneratorModelKey,
              videoModelKey: e.videoGeneratorModelKey,
            }),
          );
          if (i) {
            return a._(
              {
                type: "open_generator",
              },
              i,
            );
          }
          return undefined;
        case "generation":
          const n = p(e);
          if (n) {
            return a._(
              {
                type: "generation",
              },
              n,
            );
          }
          return undefined;
        case "link":
          const r = m(e.linkUrl);
          const target = e.linkTarget;
          if (r && (target === "same_tab" || target === "new_tab")) {
            return {
              type: "link",
              url: r,
              target,
            };
          }
          return undefined;
        case "canvas_tool":
          const c = m(e.canvasToolUrl);
          const capability = m(e.canvasCapability);
          const capsuleId = m(e.canvasCapsuleId);
          const mediaType = e.canvasInputMediaType;
          if (
            !c ||
            !capability ||
            (mediaType !== "image" && mediaType !== "video") ||
            (e.canvasCapsuleId !== undefined &&
              e.canvasCapsuleId !== null &&
              !capsuleId)
          ) {
            return;
          }
          const inputRules = ((e, t) => {
            let i;
            let n;
            const r = [
              ["minWidth", e.canvasInputMinWidth],
              ["maxWidth", e.canvasInputMaxWidth],
              ["minHeight", e.canvasInputMinHeight],
              ["maxHeight", e.canvasInputMaxHeight],
              ["minSizeMB", e.canvasInputMinSizeMb],
              [
                "maxSizeMB",
                t === "image"
                  ? e.canvasInputImageMaxSizeMb
                  : e.canvasInputVideoMaxSizeMb,
              ],
              [
                "minDurationSeconds",
                t === "video" ? e.canvasInputMinDurationSeconds : undefined,
              ],
              [
                "maxDurationSeconds",
                t === "video" ? e.canvasInputMaxDurationSeconds : undefined,
              ],
              ["minCount", e.canvasInputMinCount],
              ["maxCount", e.canvasInputMaxCount],
            ];
            const a = {};
            for (const [o, s] of r) {
              if (s != null) {
                if (typeof s !== "number" || !Number.isFinite(s) || s < 0) {
                  return;
                }
                a[o] = s;
              }
            }
            if (
              !(
                [a.minWidth, a.maxWidth, a.minHeight, a.maxHeight].some(
                  (e) => e !== undefined && (!Number.isSafeInteger(e) || e < 1),
                ) ||
                [a.minCount, a.maxCount].some(
                  (e) => e !== undefined && !Number.isSafeInteger(e),
                )
              )
            ) {
              const c = (i = a.minCount) != null ? i : 0;
              const l = (n = a.maxCount) != null ? n : 1;
              if (!(l < 1) && !(c > l)) {
                if (
                  [
                    [a.minWidth, a.maxWidth],
                    [a.minHeight, a.maxHeight],
                    [a.minSizeMB, a.maxSizeMB],
                    [a.minDurationSeconds, a.maxDurationSeconds],
                  ].some((e) => {
                    var [t, i] = e;
                    return t !== undefined && i !== undefined && t > i;
                  })
                ) {
                  return undefined;
                }
                return a;
              }
            }
          })(e, mediaType);
          if (!inputRules) {
            return;
          }
          return {
            type: "canvas_tool",
            url: c,
            capability,
            capsuleId,
            mediaType,
            inputRules,
          };
        case "canvas_template":
          const templateProjectId = m(e.canvasTemplateProjectId);
          if (templateProjectId) {
            return {
              type: "canvas_template",
              templateProjectId,
            };
          }
          return undefined;
        default:
          return;
      }
    })(e);
    if (id && title && action) {
      const tag = (t = m(e.badge)) == null ? undefined : t.trim().toLowerCase();
      return o._(
        a._(
          {
            id,
            title,
            titleKey: m(e.titleStarlingKey),
            description: m(e.descriptionFallback),
            descriptionKey: m(e.descriptionStarlingKey),
            detailDescription: m(e.detailDescriptionFallback),
            detailDescriptionKey: m(e.detailDescriptionStarlingKey),
            iconUrl: c(m(e.iconUri), e.imageUrlMap),
            coverUrl: c(m(e.coverUri), e.imageUrlMap),
          },
          tag === "hot" || tag === "new"
            ? {
                tag,
              }
            : {},
        ),
        {
          tileCoverUrl: c(m(e.tileCoverUri), e.imageUrlMap),
          badge: tag === "new" || tag === "hot" ? tag : undefined,
          action,
        },
      );
    }
  }
}
export function wh(e) {
  if (v(e) && ("scene" in e || "panels" in e)) {
    return ((e) => {
      const scene = m(e.scene);
      if (!scene || !Array.isArray(e.panels)) {
        return s.xz(-1, "invalid home creation banner panels");
      }
      const panels = [];
      const n = new Set();
      for (const r of e.panels) {
        if (!v(r)) {
          return s.xz(-1, "invalid home creation banner panel");
        }
        const panelKey = m(r.panelKey);
        if (
          !panelKey ||
          typeof r.panelName !== "string" ||
          !Array.isArray(r.items) ||
          n.has(panelKey)
        ) {
          return s.xz(-1, "invalid home creation banner panel");
        }
        n.add(panelKey);
        const l = new Set();
        const d = [];
        for (const u of r.items) {
          const p = _(u);
          if (!(!p || l.has(p.id))) {
            l.add(p.id);
            d.push(
              o._(a._({}, p), {
                scene,
                panelKey,
              }),
            );
          }
        }
        panels.push({
          panelKey,
          panelName: r.panelName,
          items: d,
        });
      }
      return s.TZ(
        a._(
          {
            scene,
            source: m(e.source),
            panels,
            items: panels.flatMap((e) => e.items),
          },
          panels.length === 1
            ? {
                panelKey: panels[0].panelKey,
              }
            : {},
        ),
      );
    })(e);
  }
  if (!v(e) || !Array.isArray(e.items)) {
    return s.xz(-1, "invalid home creation banner response");
  }
  const t = new Set();
  const i = [];
  for (const n of e.items) {
    const r = _(n);
    if (r && !t.has(r.id)) {
      t.add(r.id);
      i.push(r);
    }
  }
  return s.TZ({
    items: i,
    panelKey: m(e.panelKey),
    source: m(e.source),
  });
}
