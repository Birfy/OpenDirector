import i from "oa";
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
    const a = imageUrlMap[e];
    if (typeof a === "string" && a.trim().length > 0) {
      return a;
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
function p(e) {
  return e !== null && typeof e === "object" && !Array.isArray(e);
}
function m(e) {
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
    let a;
    let r;
    const n = (t = e.generateCount) != null ? t : undefined;
    const i =
      e.generateType === "video" && (a = e.videoDurationSeconds) != null
        ? a
        : undefined;
    if (
      (n === undefined ||
        (typeof n === "number" && Number.isInteger(n) && !(n <= 0))) &&
      (i === undefined ||
        (typeof i === "number" && Number.isFinite(i) && !(i <= 0)))
    ) {
      const o = (r = e.referenceImageUris) != null ? r : undefined;
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
          generateCount: typeof n === "number" ? n : undefined,
          generationMode:
            e.generateType === "video" ? m(e.videoGenerationMode) : undefined,
          durationSeconds: typeof i === "number" ? i : undefined,
        };
      }
    }
  }
}
function v(e) {
  if (p(e)) {
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
          const a = h(
            o._(i._({}, e), {
              generateType: e.generatorType,
              digitalHumanModelKey: e.digitalHumanGeneratorModelKey,
              imageModelKey: e.imageGeneratorModelKey,
              videoModelKey: e.videoGeneratorModelKey,
            }),
          );
          if (a) {
            return i._(
              {
                type: "open_generator",
              },
              a,
            );
          }
          return undefined;
        case "generation":
          const r = h(e);
          if (r) {
            return i._(
              {
                type: "generation",
              },
              r,
            );
          }
          return undefined;
        case "link":
          const n = m(e.linkUrl);
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
            let a;
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
            const i = {};
            for (const [o, s] of n) {
              if (s != null) {
                if (typeof s !== "number" || !Number.isFinite(s) || s < 0) {
                  return;
                }
                i[o] = s;
              }
            }
            if (
              !(
                [i.minWidth, i.maxWidth, i.minHeight, i.maxHeight].some(
                  (e) => e !== undefined && (!Number.isSafeInteger(e) || e < 1),
                ) ||
                [i.minCount, i.maxCount].some(
                  (e) => e !== undefined && !Number.isSafeInteger(e),
                )
              )
            ) {
              const c = (a = i.minCount) != null ? a : 0;
              const l = (r = i.maxCount) != null ? r : 1;
              if (!(l < 1) && !(c > l)) {
                if (
                  [
                    [i.minWidth, i.maxWidth],
                    [i.minHeight, i.maxHeight],
                    [i.minSizeMB, i.maxSizeMB],
                    [i.minDurationSeconds, i.maxDurationSeconds],
                  ].some((e) => {
                    var [t, a] = e;
                    return t !== undefined && a !== undefined && t > a;
                  })
                ) {
                  return undefined;
                }
                return i;
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
        i._(
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
  if (p(e) && ("scene" in e || "panels" in e)) {
    return ((e) => {
      const scene = m(e.scene);
      if (!scene || !Array.isArray(e.panels)) {
        return s.xz(-1, "invalid home creation banner panels");
      }
      const panels = [];
      const r = new Set();
      for (const n of e.panels) {
        if (!p(n)) {
          return s.xz(-1, "invalid home creation banner panel");
        }
        const panelKey = m(n.panelKey);
        if (
          !panelKey ||
          typeof n.panelName !== "string" ||
          !Array.isArray(n.items) ||
          r.has(panelKey)
        ) {
          return s.xz(-1, "invalid home creation banner panel");
        }
        r.add(panelKey);
        const l = new Set();
        const d = [];
        for (const u of n.items) {
          const h = v(u);
          if (!(!h || l.has(h.id))) {
            l.add(h.id);
            d.push(
              o._(i._({}, h), {
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
        i._(
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
  if (!p(e) || !Array.isArray(e.items)) {
    return s.xz(-1, "invalid home creation banner response");
  }
  const t = new Set();
  const a = [];
  for (const r of e.items) {
    const n = v(r);
    if (n && !t.has(n.id)) {
      t.add(n.id);
      a.push(n);
    }
  }
  return s.TZ({
    items: a,
    panelKey: m(e.panelKey),
    source: m(e.source),
  });
}
