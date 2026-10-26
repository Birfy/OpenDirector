import r from "Ut";
import { O } from "./module-Y5t.js";
import { d as d_1 } from "./module-YpG.js";
import { L } from "./module-zp.js";
function l(e) {
  return !!(e == null ? undefined : e.trim());
}
function s(e) {
  return !!(
    (e == null ? undefined : e.imageUrl) || (e == null ? undefined : e.imageUri)
  );
}
function u(e) {
  let t;
  return !!(
    (e == null ? undefined : e.videoId) ||
    (e == null ? undefined : e.vid) ||
    (e == null || (t = e.originVideo) == null ? undefined : t.videoUrl)
  );
}
export function B(e) {
  if (e.lastProcessFlow === r.DAVideoProcessType.SubtitleErase) {
    return "subtitle_erase";
  }
  if (e.lastProcessFlow === r.DAVideoProcessType.GenerateFromDraft) {
    return "postedit_generate_from_draft";
  }
  if (O(e)) {
    if (e.taskExtra.isRegenerate) {
      return "ai_music_regenerate";
    }
    return "ai_music";
  }
  if (d_1(e)) {
    return "postedit_v2a";
  }
  if (L(e)) {
    return "video_action_driver";
  }
  if (
    ((c = e.originalInput) == null ||
    (d = c.videoGenInputs[0]) == null ||
    (i = d.unifiedEditInput) == null ||
    (t = i.extendInput) == null
      ? undefined
      : t.enable) === true
  ) {
    return "postedit_video_sequel";
  }
  var t;
  var i;
  var d;
  var c;
  let m;
  const p = {
    [r.DAVideoProcessType.Extend]: "add_more",
    [r.DAVideoProcessType.InsertFrame]: "frame_interpolation",
    [r.DAVideoProcessType.SR]: "upscale",
    [r.DAVideoProcessType.LipSync]: "postedit_lip_sync",
    [r.DAVideoProcessType.LipSyncImage]: "lip_sync_image",
    [r.DAVideoProcessType.LipSyncUserVideo]: "lip_sync",
    13: "postedit_video_edit",
  };
  const videoProcessType = e.taskExtra.videoProcessType;
  const f =
    videoProcessType !== undefined && videoProcessType === 13
      ? videoProcessType
      : e.lastProcessFlow;
  if (f !== undefined) {
    const g = p[f];
    if (g) {
      return g;
    }
  }
  return ((e) => {
    let t;
    let i;
    let n;
    let a;
    let o;
    let d;
    let c;
    let m;
    let p;
    if (
      s(e == null ? undefined : e.firstFrameImage) ||
      s(e == null ? undefined : e.endFrameImage) ||
      ((t =
        e == null || (i = e.multiFrames) == null
          ? undefined
          : i.some((e) => {
              var t;
              var i;
              if (
                ((t = e.mediaInfo) == null ? undefined : t.mediaType) ===
                r.DAMediaType.Image
              ) {
                return s(e.mediaInfo.imageInfo);
              }
              if (
                ((i = e.mediaInfo) == null ? undefined : i.mediaType) ===
                r.DAMediaType.Video
              ) {
                return u(e.mediaInfo.videoInfo);
              }
              return u(e.segmentVideo);
            })) != null &&
        t) ||
      ((n =
        e == null || (a = e.unifiedEditInput) == null
          ? undefined
          : a.materialList.some((e) => {
              if (e.materialType === "image") {
                return s(e.imageInfo);
              }
              if (e.materialType === "video") {
                return u(e.videoInfo);
              }
              return e.materialType === "subject" && !!e.subjectData;
            })) != null &&
        n) ||
      (e == null || (o = e.idipFrames) == null ? undefined : o.some(s)) ||
      (e == null || (d = e.idipMetaList) == null
        ? undefined
        : d.some((e) => e.metaType === "idip_frame"))
    ) {
      if (
        l(e == null ? undefined : e.prompt) ||
        (e == null || (c = e.multiFrames) == null
          ? undefined
          : c.some((e) => l(e.prompt))) ||
        (e == null || (m = e.unifiedEditInput) == null
          ? undefined
          : m.metaList.some((e) => e.metaType === "text" && l(e.text))) ||
        (e == null || (p = e.idipMetaList) == null
          ? undefined
          : p.some((e) => e.metaType === "text" && l(e.text)))
      ) {
        return "i|t2V";
      }
      return "i2v";
    }
    return "t2v";
  })((m = e.originalInput) == null ? undefined : m.videoGenInputs[0]);
}
