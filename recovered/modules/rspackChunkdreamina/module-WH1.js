import n from "QI";
import { U } from "./module-YFT.js";
import { W, _ } from "./module-A8t.js";
export function QP(e, i) {
  const { canvasEnabled, baseUrl } = i;
  const { action } = e;
  switch (action.type) {
    case "tool":
      return (
        (W(action.toolKey) && !canvasEnabled) ||
        !_({
          entryId: e.id,
          toolKey: action.toolKey,
          enterFrom: "ai_feature",
        })
      );
    case "canvas_tool":
      return !canvasEnabled || !U(action.url, baseUrl);
    case "canvas_template":
      return !canvasEnabled;
    default:
      return false;
  }
}
export function YD(e, i, a) {
  return e.map((e) => {
    var t;
    var o;
    var r;
    var s;
    var l = e.titleKey && i ? i(e.titleKey, e.title) : e.title;
    return {
      id: n.lN(e),
      title: l.trim() ? l : e.title,
      description:
        e.descriptionKey && i
          ? i(e.descriptionKey, (t = e.description) != null ? t : "")
          : e.description,
      iconUrl: e.iconUrl,
      coverUrl: e.coverUrl,
      tag: e.tag,
      tileCoverUrl: e.tileCoverUrl,
      action: e.action,
      previewDescription:
        e.detailDescriptionKey && i
          ? i(
              e.detailDescriptionKey,
              (o = (r = e.detailDescription) != null ? r : e.description) !=
                null
                ? o
                : "",
            )
          : (s = e.detailDescription) != null
            ? s
            : e.description,
      disabled: a == null ? undefined : a(e),
    };
  });
}
export function Tw(e) {
  return e.length > 0;
}
