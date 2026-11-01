import r from "UH9";
import a from "Hmo";
import n from "hP";
import o from "GS";
export function X(e) {
  let t;
  const templateId = (t = e.templateId) && t !== "0" ? t : undefined;
  const s = e.abilityList.reduce((acc, item) => {
    if (a.w(item)) {
      return [...acc, "byte_edit"];
    }
    return acc;
  }, []);
  return o.OC({
    scenario: "image_video_generation",
    featureKey: "to_image_referenceimage",
    featureEntranceDetail: ""
      .concat(r.F(), "-referenceimage-")
      .concat(s.join(",")),
    editType: templateId ? "template" : "tool",
    toolId: templateId ? n.M.TemplateImage : n.M.ToolImage,
    templateId,
    extraParams: {
      modelId: e.modelKey,
      generateType: "i2i",
    },
  });
}
