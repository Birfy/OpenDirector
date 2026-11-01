import a from "oa";
import o from "bk";
import s from "K8";
function l(e, imageUrlMap) {
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
function m(e) {
  return e !== null && typeof e === "object" && !Array.isArray(e);
}
function p(e) {
  if (typeof e === "string" && e.trim().length > 0) {
    return e;
  }
}
function h(e) {
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
      modelKey: p(e.digitalHumanModelKey),
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
    let r;
    const n = (t = e.generateCount) != null ? t : undefined;
    const a =
      e.generateType === "video" && (i = e.videoDurationSeconds) != null
        ? i
        : undefined;
    if (
      (n === undefined ||
        (typeof n === "number" && Number.isInteger(n) && !(n <= 0))) &&
      (a === undefined ||
        (typeof a === "number" && Number.isFinite(a) && !(a <= 0)))
    ) {
      const o = (r = e.referenceImageUris) != null ? r : undefined;
      if (!(o !== undefined && (!Array.isArray(o) || o.some((e) => !p(e))))) {
        return {
          generateType: e.generateType,
          prompt: typeof e.prompt === "string" ? e.prompt : undefined,
          modelKey: p(
            e.generateType === "image" ? e.imageModelKey : e.videoModelKey,
          ),
          referenceImages: Array.isArray(o)
            ? o.map((imageUri) => ({
                imageUri,
                imageUrl: l(imageUri, e.imageUrlMap),
              }))
            : undefined,
          aspectRatio: p(e.aspectRatio),
          resolution: p(e.resolution),
          generateCount: typeof n === "number" ? n : undefined,
          generationMode:
            e.generateType === "video" ? p(e.videoGenerationMode) : undefined,
          durationSeconds: typeof a === "number" ? a : undefined,
        };
      }
    }
  }
}
function v(e) {
  if (m(e)) {
    let t;
    const id = p(e.itemCode);
    const title = p(e.titleFallback);
    const action = ((e) => {
      switch (e.actionType) {
        case "tool":
          const toolKey = p(e.modalToolKey);
          if (toolKey) {
            return {
              type: "tool",
              toolKey,
            };
          }
          return undefined;
        case "open_generator":
          const i = h(
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
          const r = h(e);
          if (r) {
            return a._(
              {
                type: "generation",
              },
              r,
            );
          }
          return undefined;
        case "link":
          const n = p(e.linkUrl);
          const target = e.linkTarget;
          if (n && (target === "same_tab" || target === "new_tab")) {
            return {
              type: "link",
              url: n,
              target,
            };
          }
          return undefined;
        case "canvas_tool":
          const l = p(e.canvasToolUrl);
          const capability = p(e.canvasCapability);
          const capsuleId = p(e.canvasCapsuleId);
          const mediaType = e.canvasInputMediaType;
          if (
            !l ||
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
            let r;
            const n = [
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
            for (const [o, s] of n) {
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
              const l = (i = a.minCount) != null ? i : 0;
              const c = (r = a.maxCount) != null ? r : 1;
              if (!(c < 1) && !(l > c)) {
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
            url: l,
            capability,
            capsuleId,
            mediaType,
            inputRules,
          };
        case "canvas_template":
          const templateProjectId = p(e.canvasTemplateProjectId);
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
      const tag = (t = p(e.badge)) == null ? undefined : t.trim().toLowerCase();
      return o._(
        a._(
          {
            id,
            title,
            titleKey: p(e.titleStarlingKey),
            description: p(e.descriptionFallback),
            descriptionKey: p(e.descriptionStarlingKey),
            detailDescription: p(e.detailDescriptionFallback),
            detailDescriptionKey: p(e.detailDescriptionStarlingKey),
            iconUrl: l(p(e.iconUri), e.imageUrlMap),
            coverUrl: l(p(e.coverUri), e.imageUrlMap),
          },
          tag === "hot" || tag === "new"
            ? {
                tag,
              }
            : {},
        ),
        {
          tileCoverUrl: l(p(e.tileCoverUri), e.imageUrlMap),
          badge: tag === "new" || tag === "hot" ? tag : undefined,
          action,
        },
      );
    }
  }
}
export function wh(e) {
  if (m(e) && ("scene" in e || "panels" in e)) {
    return ((e) => {
      const scene = p(e.scene);
      if (!scene || !Array.isArray(e.panels)) {
        return s.xz(-1, "invalid home creation banner panels");
      }
      const panels = [];
      const r = new Set();
      for (const n of e.panels) {
        if (!m(n)) {
          return s.xz(-1, "invalid home creation banner panel");
        }
        const panelKey = p(n.panelKey);
        if (
          !panelKey ||
          typeof n.panelName !== "string" ||
          !Array.isArray(n.items) ||
          r.has(panelKey)
        ) {
          return s.xz(-1, "invalid home creation banner panel");
        }
        r.add(panelKey);
        const c = new Set();
        const d = [];
        for (const u of n.items) {
          const h = v(u);
          if (!(!h || c.has(h.id))) {
            c.add(h.id);
            d.push(
              o._(a._({}, h), {
                scene,
                panelKey,
              }),
            );
          }
        }
        panels.push({
          panelKey,
          panelName: n.panelName,
          items: d,
        });
      }
      return s.TZ(
        a._(
          {
            scene,
            source: p(e.source),
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
  if (!m(e) || !Array.isArray(e.items)) {
    return s.xz(-1, "invalid home creation banner response");
  }
  const t = new Set();
  const i = [];
  for (const r of e.items) {
    const n = v(r);
    if (n && !t.has(n.id)) {
      t.add(n.id);
      i.push(n);
    }
  }
  return s.TZ({
    items: i,
    panelKey: p(e.panelKey),
    source: p(e.source),
  });
}
