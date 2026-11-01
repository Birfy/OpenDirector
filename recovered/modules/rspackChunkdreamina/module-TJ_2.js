import r from "oa";
import n from "bk";
export var Ry = "__DREAMINA_HOME_CREATION_BANNER_SSR_SNAPSHOT__";
function o(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
function s(e) {
  return typeof e === "string" && e.trim().length > 0;
}
function c(e) {
  return e === undefined || typeof e === "string";
}
function l(e) {
  return (
    o(e) &&
    s(e.id) &&
    s(e.title) &&
    (e.tag === undefined || e.tag === "hot" || e.tag === "new") &&
    (e.badge === undefined || e.badge === "new" || e.badge === "hot") &&
    [
      "scene",
      "panelKey",
      "titleKey",
      "description",
      "descriptionKey",
      "detailDescription",
      "detailDescriptionKey",
      "iconUrl",
      "coverUrl",
      "tileCoverUrl",
    ].every((t) => c(e[t])) &&
    ((e) => {
      if (!o(e)) {
        return false;
      }
      switch (e.type) {
        case "tool":
          return s(e.toolKey);
        case "canvas_template":
          return s(e.templateProjectId);
        case "canvas_tool":
          return (
            s(e.url) &&
            s(e.capability) &&
            c(e.capsuleId) &&
            (e.mediaType === "image" || e.mediaType === "video") &&
            ((e) => {
              if (e === undefined) {
                return true;
              }
              if (!o(e)) {
                return false;
              }
              for (const [t, i] of [
                ["minWidth", "maxWidth"],
                ["minHeight", "maxHeight"],
                ["minSizeMB", "maxSizeMB"],
                ["minDurationSeconds", "maxDurationSeconds"],
                ["minCount", "maxCount"],
              ]) {
                var r;
                var n;
                var a;
                const s = e[t];
                const c = e[i];
                if (
                  [s, c].some(
                    (e) =>
                      e !== undefined &&
                      (typeof e !== "number" || !Number.isFinite(e) || e < 0),
                  ) ||
                  (typeof s === "number" && typeof c === "number" && s > c)
                ) {
                  return false;
                }
              }
              return (
                ["minWidth", "maxWidth", "minHeight", "maxHeight"].every(
                  (t) =>
                    e[t] === undefined ||
                    (Number.isSafeInteger(e[t]) && e[t] > 0),
                ) &&
                ["minCount", "maxCount"].every(
                  (t) => e[t] === undefined || Number.isSafeInteger(e[t]),
                ) &&
                ((r = e.maxCount) != null ? r : 1) >= 1 &&
                ((n = e.minCount) != null ? n : 0) <=
                  ((a = e.maxCount) != null ? a : 1)
              );
            })(e.inputRules)
          );
        case "link":
          return (
            s(e.url) && (e.target === "same_tab" || e.target === "new_tab")
          );
        case "generation":
        case "open_generator":
          if (e.generateType === "digitalHuman") {
            return ["modelKey", "speech", "prompt"].every((t) => c(e[t]));
          }
          return (
            (e.generateType === "image" || e.generateType === "video") &&
            [
              "prompt",
              "modelKey",
              "aspectRatio",
              "resolution",
              "generationMode",
            ].every((t) => c(e[t])) &&
            (e.generateCount === undefined ||
              (Number.isInteger(e.generateCount) && e.generateCount > 0)) &&
            (e.durationSeconds === undefined ||
              (typeof e.durationSeconds === "number" &&
                Number.isFinite(e.durationSeconds) &&
                e.durationSeconds > 0)) &&
            (e.referenceImages === undefined ||
              (Array.isArray(e.referenceImages) &&
                e.referenceImages.every(
                  (e) =>
                    o(e) &&
                    c(e.imageUri) &&
                    c(e.imageUrl) &&
                    (s(e.imageUri) || s(e.imageUrl)),
                )))
          );
        default:
          return false;
      }
    })(e.action)
  );
}
export function tj(e) {
  return JSON.stringify(
    r._(
      {
        version: 1,
      },
      e,
    ),
  )
    .replace(/</g, "\\u003c")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}
export function BD() {
  if (!(typeof document === "undefined")) {
    const e = document.getElementById(Ry);
    if (e) {
      e.remove();
      try {
        let t;
        const i = JSON.parse((t = e.textContent) != null ? t : "");
        if (
          !o(i) ||
          i.version !== 1 ||
          !Array.isArray(i.items) ||
          !i.items.every(l) ||
          !c(i.panelKey) ||
          !c(i.source) ||
          (i.panelKeys !== undefined &&
            (!Array.isArray(i.panelKeys) || !i.panelKeys.every(s))) ||
          new Set(i.items.map((e) => e.id)).size !== i.items.length
        ) {
          return;
        }
        return n._(
          r._(
            {
              items: i.items,
            },
            Array.isArray(i.panelKeys)
              ? {
                  panelKeys: i.panelKeys,
                }
              : {},
          ),
          {
            panelKey: i.panelKey,
            source: i.source,
          },
        );
      } catch (e) {
        return;
      }
    }
  }
}
