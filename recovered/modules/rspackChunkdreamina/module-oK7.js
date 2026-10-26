import r from "UH9";
import a from "hP";
import n from "GS";
export function X(e, t) {
  let i;
  const featureKey = e ? "image_to_video" : "text_to_video";
  const templateId =
    (i = t == null ? undefined : t.templateId) && i !== "0" ? i : undefined;
  return n.OC({
    scenario: "image_video_generation",
    featureKey,
    featureEntranceDetail: "".concat(r.F(), "-").concat(featureKey),
    editType: templateId ? "template" : "tool",
    toolId: templateId ? a.M.TemplateVideo : a.M.ToolVideo,
    templateId,
    extraParams: {
      modelId: t == null ? undefined : t.modelKey,
      generateType: e ? "i2v" : "t2v",
    },
  });
}
