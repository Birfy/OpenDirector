import r from "oa";
import { U } from "./module-YFT_2.js";
export function h(e) {
  const { action } = e;
  if (action.type === "canvas_tool") {
    const url = U(action.url);
    if (url) {
      return {
        id: e.id,
        title: e.title,
        titleKey: e.titleKey,
        description: e.description,
        descriptionKey: e.descriptionKey,
        detailDescription: e.detailDescription,
        detailDescriptionKey: e.detailDescriptionKey,
        coverUrl: e.coverUrl,
        url,
        mediaType: action.mediaType,
        inputRules: action.inputRules,
        intent: r._(
          {
            capability: action.capability,
          },
          action.capsuleId !== undefined
            ? {
                capsuleId: action.capsuleId,
              }
            : {},
        ),
      };
    }
  }
}
