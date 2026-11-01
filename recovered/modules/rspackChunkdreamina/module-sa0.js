import r from "oa";
import a from "bk";
import n from "UH9";
import o from "hP";
import s from "GS";
export function ri(e) {
  return s.OC(
    a._(r._({}, e), {
      editType: "tool",
      toolId: o.M.ToolImage,
    }),
  );
}
export function FQ(e) {
  return s.OC(
    a._(r._({}, e), {
      editType: "tool",
      toolId: o.M.ToolVideo,
    }),
  );
}
export function g8(e) {
  return FQ({
    scenario: "image_video_generation",
    featureKey: "image_to_video",
    featureEntranceDetail: "".concat(n.F(), "-image_to_video"),
    extraParams: {
      modelId: e == null ? undefined : e.modelKey,
    },
  });
}
