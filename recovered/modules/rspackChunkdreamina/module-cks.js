import { w4 } from "./module-wTQ.js";
import { t as t_1 } from "./module-qVX.js";
import { _, f } from "./module-vSe.js";
export var W$ = {
  Text2Video: "text2video",
  Image2Video: "image2video",
  StartEnd2Video: "start_end2video",
  MultiFrame2Video: "multi_frame2video",
  MultiModal2Video: "multi_modal2video",
  VideoExpand: "video_expand",
  VideoEdit: "video_edit",
  ClipJoin: "clip_join",
};
export var Dv = {
  text2video: "text2video",
  image2video: "image2video",
  start_end2video: "start_end2video",
  multi_frame2video: "multi_frame2video",
  multi_modal2video: "multi_modal2video",
  video_expand: "video_expand",
  video_edit: "video_edit",
  clip_join: "clip_join",
};
const d = new Set([
  "text2video",
  "image2video",
  "start_end2video",
  "multi_frame2video",
  "multi_modal2video",
  "video_expand",
  "video_edit",
  "clip_join",
]);
export function NO(e) {
  const t = t_1(e);
  if (t !== null) {
    return d.has(t);
  }
  return _(e.toolName, f(e), [], w4);
}
