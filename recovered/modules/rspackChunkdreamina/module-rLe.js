import a from "f3";
import t from "lNt";
import * as i from "./module-IRw_3.js";
export function w(e) {
  let l;
  let n;
  const o = e.source !== a.fc.User || t.HX(e);
  const cover = o ? i.qW((l = e.showcaseMedia) != null ? l : []) : undefined;
  return {
    id: e.id,
    name: e.name,
    description: o ? t.sK(e) : Array.from(e.description).slice(0, 500).join(""),
    kind: o ? "showcase" : "text",
    cover,
    videoUrl:
      (cover == null || (n = cover.coverMedia) == null ? undefined : n.type) ===
      "video"
        ? i.iU(cover.coverMedia, i.BY, i.E9)
        : undefined,
  };
}
