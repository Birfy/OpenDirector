import n from "Qey";
import t from "zM";
export function A(e) {
  if (e === t.M.ShortDrama) {
    return n.Ay.t(
      "web_mainframe_short_drama_view_canvas",
      {
        thirdParamFallback: true,
        fallbackText: "查看短剧画布",
      },
      "查看短剧画布",
    );
  }
  return n.Ay.t("web_mainframe_explore_view_workflow", {}, "查看关联的画布");
}
