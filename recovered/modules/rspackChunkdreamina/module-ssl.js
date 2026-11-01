import i from "hP";
import a from "GS";
import n from "UH9";
export function y(e) {
  let t;
  const editType =
    (t = e == null ? undefined : e.editType) != null ? t : "agent";
  return a.OC({
    scenario: "image_video_generation",
    featureKey: editType === "canva" ? "canvas_agent" : "creation_agent",
    featureEntranceDetail: ""
      .concat(n.F(), "-")
      .concat(editType === "canva" ? "canvas_agent" : "creation_agent"),
    editType,
    toolId: editType === "canva" ? i.M.Canva : i.M.Agent,
    templateId: e == null ? undefined : e.templateId,
    extraParams: e == null ? undefined : e.extraParams,
  });
}
