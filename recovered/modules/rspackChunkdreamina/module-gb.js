import p from "cMg";
import u from "HS";
import c from "CW";
import m from "zO";
import v from "af";
import g from "ox";
import f from "uR";
import { FeaturesMinVersion } from "./module-ew.js";
import { DAVideoGenI2V } from "./module-zl.js";
import { DAVideoGenV2V } from "./module-EJ_2.js";
import I from "./module-Rd.js";
let o;
let r;
let a;
export var DAVideoMode;
export var DAPriority;
export var DAVideoResolutionType;
const l =
  (this && this.__decorate) ||
  function (e, t, i, o) {
    let r;
    const arguments_length = arguments.length;
    let n =
      arguments_length < 3
        ? t
        : o === null
          ? (o = Object.getOwnPropertyDescriptor(t, i))
          : o;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
      n = Reflect.decorate(e, t, i, o);
    } else {
      for (let s = e.length - 1; s >= 0; s--) {
        if ((r = e[s])) {
          n =
            (arguments_length < 3
              ? r(n)
              : arguments_length > 3
                ? r(t, i, n)
                : r(t, i)) || n;
        }
      }
    }
    if (arguments_length > 3 && n) {
      Object.defineProperty(t, i, n);
    }
    return n;
  };
o = DAVideoMode || (DAVideoMode = {});
o[(o.v1Default = 0)] = "v1Default";
o[(o.preview = 1)] = "preview";
o[(o._default = 2)] = "_default";
o[(o.iCLivePhoto = 3)] = "iCLivePhoto";
o[(o.avatar = 4)] = "avatar";
o[(o.avatarLoopy = 5)] = "avatarLoopy";
o[(o.avatarHq = 6)] = "avatarHq";
o[(o.avatarHq480 = 7)] = "avatarHq480";
r = DAPriority || (DAPriority = {});
r[(r.Normal = 0)] = "Normal";
r[(r.Relax = 1)] = "Relax";
a = DAVideoResolutionType || (DAVideoResolutionType = {});
a.VideoResolutionType_480p = "480p";
a.VideoResolutionType_720p = "720p";
a.VideoResolutionType_1080p = "1080p";
export class DAVideoGenInput extends f.DANode {
  constructor() {
    super(...arguments);
    this.prompt = undefined;
    this.isDraft = undefined;
    this.firstFrameImage = undefined;
    this.endFrameImage = undefined;
    this.lensMotionType = undefined;
    this.motionSpeed = undefined;
    this.vid = undefined;
    this.endingControl = undefined;
    this.preTaskId = undefined;
    this.audioVid = undefined;
    this.videoMode = undefined;
    this.fps = undefined;
    this.durationMs = undefined;
    this.cameraStrength = undefined;
    this.templateId = undefined;
    this.i2vOpt = undefined;
    this.v2vOpt = undefined;
    this.originHistoryId = undefined;
    this.originAgenticHistoryId = undefined;
    this.resolution = undefined;
    this.lensRecipeInput = undefined;
    this.multiFrames = undefined;
    this.idipFrames = undefined;
    this.idipMetaList = undefined;
    this.unifiedEditInput = undefined;
    this.longVideoInput = undefined;
  }
  afterInit() {
    super.afterInit();
    this.minVersion = FeaturesMinVersion.VideoGenerateAbility;
  }
  calculateMinVersion() {
    if (
      this.resolution != undefined &&
      this.resolution === DAVideoResolutionType.VideoResolutionType_1080p
    ) {
      this.minVersion = FeaturesMinVersion.VideoResolution1080P;
    }
    if (this.lensRecipeInput != undefined) {
      this.minVersion = FeaturesMinVersion.VideoLensRecipe;
    }
    if (this.unifiedEditInput != undefined) {
      this.minVersion = FeaturesMinVersion.VideoUnifiedEdit;
      if (this.unifiedEditInput.hasSubjectMaterial()) {
        this.minVersion = FeaturesMinVersion.UnifiedEditSubject;
      }
      if (this.unifiedEditInput.hasSubjectWithVideoOrAudio()) {
        this.minVersion = FeaturesMinVersion.UnifiedEditSubject_v2;
      }
    }
    if (this.longVideoInput != undefined) {
      this.minVersion = FeaturesMinVersion.VideoLongVideo;
    }
    if (this.isDraft === true) {
      this.minVersion = FeaturesMinVersion.VideoDraft;
    }
    return super.calculateMinVersion();
  }
  childNodes() {
    let e = [];
    let firstFrameImage = this.firstFrameImage;
    if (firstFrameImage != undefined) {
      e.push(firstFrameImage);
    }
    let endFrameImage = this.endFrameImage;
    if (endFrameImage != undefined) {
      e.push(endFrameImage);
    }
    let i2vOpt = this.i2vOpt;
    if (i2vOpt != undefined) {
      e.push(i2vOpt);
    }
    let v2vOpt = this.v2vOpt;
    if (v2vOpt != undefined) {
      e.push(v2vOpt);
    }
    let lensRecipeInput = this.lensRecipeInput;
    if (lensRecipeInput != undefined) {
      e.push(lensRecipeInput);
    }
    let multiFrames = this.multiFrames;
    if (multiFrames != undefined && multiFrames.length > 0) {
      multiFrames.forEach((t) => {
        e.push(t);
      });
    }
    let idipFrames = this.idipFrames;
    if (idipFrames != undefined && idipFrames.length > 0) {
      idipFrames.forEach((t) => {
        e.push(t);
      });
    }
    let idipMetaList = this.idipMetaList;
    if (idipMetaList != undefined && idipMetaList.length > 0) {
      idipMetaList.forEach((t) => {
        e.push(t);
      });
    }
    let unifiedEditInput = this.unifiedEditInput;
    if (unifiedEditInput != undefined) {
      e.push(unifiedEditInput);
    }
    let longVideoInput = this.longVideoInput;
    if (longVideoInput != undefined) {
      e.push(longVideoInput);
    }
    return e;
  }
}
l([I.serializable("prompt")], DAVideoGenInput.prototype, "prompt", undefined);
l(
  [I.serializable("is_draft_mode")],
  DAVideoGenInput.prototype,
  "isDraft",
  undefined,
);
l(
  [I.serializable("first_frame_image", () => u.DAImageResource)],
  DAVideoGenInput.prototype,
  "firstFrameImage",
  undefined,
);
l(
  [I.serializable("end_frame_image", () => u.DAImageResource)],
  DAVideoGenInput.prototype,
  "endFrameImage",
  undefined,
);
l(
  [I.serializable("lens_motion_type")],
  DAVideoGenInput.prototype,
  "lensMotionType",
  undefined,
);
l(
  [I.serializable("motion_speed")],
  DAVideoGenInput.prototype,
  "motionSpeed",
  undefined,
);
l([I.serializable("vid")], DAVideoGenInput.prototype, "vid", undefined);
l(
  [I.serializable("ending_control")],
  DAVideoGenInput.prototype,
  "endingControl",
  undefined,
);
l(
  [I.serializable("pre_task_id", undefined, "int64")],
  DAVideoGenInput.prototype,
  "preTaskId",
  undefined,
);
l(
  [I.serializable("audio_vid", undefined, "int64")],
  DAVideoGenInput.prototype,
  "audioVid",
  undefined,
);
l(
  [I.serializable("video_mode")],
  DAVideoGenInput.prototype,
  "videoMode",
  undefined,
);
l([I.serializable("fps")], DAVideoGenInput.prototype, "fps", undefined);
l(
  [I.serializable("duration_ms")],
  DAVideoGenInput.prototype,
  "durationMs",
  undefined,
);
l(
  [I.serializable("camera_strength")],
  DAVideoGenInput.prototype,
  "cameraStrength",
  undefined,
);
l(
  [I.serializable("template_id", undefined, "int64")],
  DAVideoGenInput.prototype,
  "templateId",
  undefined,
);
l(
  [I.serializable("i2v_opt", () => DAVideoGenI2V)],
  DAVideoGenInput.prototype,
  "i2vOpt",
  undefined,
);
l(
  [I.serializable("v2v_opt", () => DAVideoGenV2V)],
  DAVideoGenInput.prototype,
  "v2vOpt",
  undefined,
);
l(
  [I.serializable("origin_history_id")],
  DAVideoGenInput.prototype,
  "originHistoryId",
  undefined,
);
l(
  [I.serializable("origin_agentic_history_id", undefined, "string")],
  DAVideoGenInput.prototype,
  "originAgenticHistoryId",
  undefined,
);
l(
  [I.serializable("resolution")],
  DAVideoGenInput.prototype,
  "resolution",
  undefined,
);
l(
  [I.serializable("lens_recipe_input", () => c.DALensRecipeInput)],
  DAVideoGenInput.prototype,
  "lensRecipeInput",
  undefined,
);
l(
  [I.serializable("multi_frames", () => v.DAMultiFrame)],
  DAVideoGenInput.prototype,
  "multiFrames",
  undefined,
);
l(
  [I.serializable("idip_frames", () => u.DAImageResource)],
  DAVideoGenInput.prototype,
  "idipFrames",
  undefined,
);
l(
  [I.serializable("idip_meta_list", () => p.DAIdIpMeta)],
  DAVideoGenInput.prototype,
  "idipMetaList",
  undefined,
);
l(
  [I.serializable("unified_edit_input", () => g.DAUnifiedEditInput)],
  DAVideoGenInput.prototype,
  "unifiedEditInput",
  undefined,
);
l(
  [I.serializable("long_video_input", () => m.DALongVideoInput)],
  DAVideoGenInput.prototype,
  "longVideoInput",
  undefined,
);
