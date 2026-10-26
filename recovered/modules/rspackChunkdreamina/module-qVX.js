import { i } from "./module-AI_2.js";
const r = "dreamina_";
const a = new Set([
  "text2image",
  "image2image",
  "image_super_resolution",
  "foreground_segmentation",
  "text2video",
  "image2video",
  "start_end2video",
  "multi_frame2video",
  "multi_modal2video",
  "video_editor",
  "text2music",
  "video_expand",
  "video_edit",
  "clip_join",
]);
export function t(e) {
  if (e.toolName === i.DreaminaCli) {
    return ((e) => {
      if (!e) {
        return null;
      }
      try {
        const t = JSON.parse(e);
        if (typeof t.command === "string") {
          return t.command;
        }
        return null;
      } catch (t) {
        let i;
        const n = e.match(/"command"\s*:\s*"([^"]+)"/);
        if ((i = n == null ? undefined : n[1]) != null) {
          return i;
        }
        return null;
      }
    })(e.toolArgs);
  }
  if (typeof e.toolName === "string" && e.toolName.startsWith(r)) {
    const t = e.toolName.slice(r.length);
    if (a.has(t)) {
      return t;
    }
    return null;
  }
  return null;
}
