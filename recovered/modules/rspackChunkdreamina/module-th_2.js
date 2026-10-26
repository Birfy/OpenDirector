import a from "Ut";
import { O } from "./module-Y5t_2.js";
import { d as d_1 } from "./module-YpG_2.js";
import { L } from "./module-zp_2.js";
function l(e) {
  return !!(e == null ? undefined : e.trim());
}
function d(e) {
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
  if (e.lastProcessFlow === a.DAVideoProcessType.SubtitleErase) {
    return "subtitle_erase";
  }
  if (e.lastProcessFlow === a.DAVideoProcessType.GenerateFromDraft) {
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
    (s = c.videoGenInputs[0]) == null ||
    (i = s.unifiedEditInput) == null ||
    (t = i.extendInput) == null
      ? undefined
      : t.enable) === true
  ) {
    return "postedit_video_sequel";
  }
  var t;
  var i;
  var s;
  var c;
  let m;
  const v = {
    [a.DAVideoProcessType.Extend]: "add_more",
    [a.DAVideoProcessType.InsertFrame]: "frame_interpolation",
    [a.DAVideoProcessType.SR]: "upscale",
    [a.DAVideoProcessType.LipSync]: "postedit_lip_sync",
    [a.DAVideoProcessType.LipSyncImage]: "lip_sync_image",
    [a.DAVideoProcessType.LipSyncUserVideo]: "lip_sync",
    13: "postedit_video_edit",
  };
  const videoProcessType = e.taskExtra.videoProcessType;
  const f =
    videoProcessType !== undefined && videoProcessType === 13
      ? videoProcessType
      : e.lastProcessFlow;
  if (f !== undefined) {
    const g = v[f];
    if (g) {
      return g;
    }
  }
  return ((e) => {
    let t;
    let i;
    let n;
    let r;
    let o;
    let s;
    let c;
    let m;
    let v;
    if (
      d(e == null ? undefined : e.firstFrameImage) ||
      d(e == null ? undefined : e.endFrameImage) ||
      ((t =
        e == null || (i = e.multiFrames) == null
          ? undefined
          : i.some((e) => {
              var t;
              var i;
              if (
                ((t = e.mediaInfo) == null ? undefined : t.mediaType) ===
                a.DAMediaType.Image
              ) {
                return d(e.mediaInfo.imageInfo);
              }
              if (
                ((i = e.mediaInfo) == null ? undefined : i.mediaType) ===
                a.DAMediaType.Video
              ) {
                return u(e.mediaInfo.videoInfo);
              }
              return u(e.segmentVideo);
            })) != null &&
        t) ||
      ((n =
        e == null || (r = e.unifiedEditInput) == null
          ? undefined
          : r.materialList.some((e) => {
              if (e.materialType === "image") {
                return d(e.imageInfo);
              }
              if (e.materialType === "video") {
                return u(e.videoInfo);
              }
              return e.materialType === "subject" && !!e.subjectData;
            })) != null &&
        n) ||
      (e == null || (o = e.idipFrames) == null ? undefined : o.some(d)) ||
      (e == null || (s = e.idipMetaList) == null
        ? undefined
        : s.some((e) => e.metaType === "idip_frame"))
    ) {
      if (
        l(e == null ? undefined : e.prompt) ||
        (e == null || (c = e.multiFrames) == null
          ? undefined
          : c.some((e) => l(e.prompt))) ||
        (e == null || (m = e.unifiedEditInput) == null
          ? undefined
          : m.metaList.some((e) => e.metaType === "text" && l(e.text))) ||
        (e == null || (v = e.idipMetaList) == null
          ? undefined
          : v.some((e) => e.metaType === "text" && l(e.text)))
      ) {
        return "i|t2V";
      }
      return "i2v";
    }
    return "t2v";
  })((m = e.originalInput) == null ? undefined : m.videoGenInputs[0]);
}
