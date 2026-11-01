const r = {
  smart_edit: ["image-smart-edit", "video-edit"],
  super_resolution: ["image-pro-hd", "video-super-resolution"],
  media_reverse: ["image-reverse", "video-reverse"],
  video_partial_reshoot: ["video-edit"],
  video_extend: ["video-extend"],
  image_to_video: ["image-to-video"],
  image_outpaint: ["image-outpaint"],
  image_inpaint: ["image-inpaint"],
  image_inpaint_remove: ["image-inpaint-remove"],
};
export function W(e) {
  return e === "media_reverse";
}
export function _(e) {
  if (Object.hasOwn(r, e.toolKey)) {
    return {
      entryId: e.entryId,
      toolId: e.toolKey,
      enterFrom: e.enterFrom,
      capabilityIds: [...r[e.toolKey]],
    };
  }
}
