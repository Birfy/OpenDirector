import d from "GL";
import l from "HS";
import p from "q2";
import u from "Wq";
import c from "uR";
import m from "pz";
import { FeaturesMinVersion } from "./module-ew.js";
import g from "./module-Rd.js";
let o;
let r;
export var DALipSyncReferenceType;
export var DALipSyncMode;
const s =
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
o = DALipSyncReferenceType || (DALipSyncReferenceType = {});
o.unknown = "unknown";
o.video = "video";
o.image = "image";
o.aiVideo = "ai_video";
r = DALipSyncMode || (DALipSyncMode = {});
r.loopy = "loopy";
r.standard = "standard";
r.hq = "hq";
r.hq480 = "hq_480";
export class DALipSyncFaceDetail extends c.DANode {
  constructor() {
    super(...arguments);
    this.faceBbox = [];
    this.faceImage = undefined;
    this.maskImage = undefined;
  }
  childNodes() {
    let e = [];
    let faceImage = this.faceImage;
    if (faceImage != undefined) {
      e.push(faceImage);
    }
    let maskImage = this.maskImage;
    if (maskImage != undefined) {
      e.push(maskImage);
    }
    return e;
  }
}
s(
  [g.serializable("face_bbox")],
  DALipSyncFaceDetail.prototype,
  "faceBbox",
  undefined,
);
s(
  [g.serializable("face_image", () => l.DAImageResource)],
  DALipSyncFaceDetail.prototype,
  "faceImage",
  undefined,
);
s(
  [g.serializable("mask_image", () => l.DAImageResource)],
  DALipSyncFaceDetail.prototype,
  "maskImage",
  undefined,
);
export class LipSyncInfoToneEmotion extends c.DANode {
  constructor() {
    super(...arguments);
    this.nameKey = "";
    this.text = "";
    this.emotion = undefined;
    this.emotionScale = undefined;
  }
}
s(
  [g.serializable("name_key")],
  LipSyncInfoToneEmotion.prototype,
  "nameKey",
  undefined,
);
s(
  [g.serializable("text")],
  LipSyncInfoToneEmotion.prototype,
  "text",
  undefined,
);
s(
  [g.serializable("emotion")],
  LipSyncInfoToneEmotion.prototype,
  "emotion",
  undefined,
);
s(
  [g.serializable("emotion_scale")],
  LipSyncInfoToneEmotion.prototype,
  "emotionScale",
  undefined,
);
export class DAImageLipSyncFace extends c.DANode {
  constructor() {
    super(...arguments);
    this.left = undefined;
    this.top = undefined;
    this.right = undefined;
    this.bottom = undefined;
    this.width = 0;
    this.height = 0;
    this.imageUri = undefined;
  }
  afterInit() {
    super.afterInit();
    this.minVersion = FeaturesMinVersion.VideoLipSyncAiVideo;
  }
}
s([g.serializable("left")], DAImageLipSyncFace.prototype, "left", undefined);
s([g.serializable("top")], DAImageLipSyncFace.prototype, "top", undefined);
s([g.serializable("right")], DAImageLipSyncFace.prototype, "right", undefined);
s(
  [g.serializable("bottom")],
  DAImageLipSyncFace.prototype,
  "bottom",
  undefined,
);
s([g.serializable("width")], DAImageLipSyncFace.prototype, "width", undefined);
s(
  [g.serializable("height")],
  DAImageLipSyncFace.prototype,
  "height",
  undefined,
);
s(
  [g.serializable("image_uri")],
  DAImageLipSyncFace.prototype,
  "imageUri",
  undefined,
);
export class DALipSyncAbility extends c.DANode {
  constructor() {
    super(...arguments);
    this.referenceType = DALipSyncReferenceType.unknown;
    this.video = undefined;
    this.videoEffectAudio = undefined;
    this.videoBgmAudio = undefined;
    this.audioBeforeConversion = undefined;
    this.image = undefined;
    this.audio = undefined;
    this.audioEffectId = undefined;
    this.audioResourceId = undefined;
    this.audioToneId = undefined;
    this.audioSpeed = undefined;
    this.audioItemPlatform = undefined;
    this.ttsContent = undefined;
    this.mode = undefined;
    this.supportedModes = undefined;
    this.faceImage = undefined;
    this.videoRefParams = undefined;
    this.seed = undefined;
    this.audioToneEmotion = undefined;
    this.prompt = undefined;
    this.modelReqKey = undefined;
    this.selectedFace = undefined;
    this.beforeSilenceMillisecond = undefined;
    this.afterSilenceMillisecond = undefined;
  }
  afterInit() {
    super.afterInit();
    this.minVersion = FeaturesMinVersion.VideoLipSyncAbility;
  }
  calculateMinVersion() {
    let e = super.calculateMinVersion();
    let FeaturesMinVersion_VideoLipSyncAbility =
      FeaturesMinVersion.VideoLipSyncAbility;
    if (
      this.referenceType === DALipSyncReferenceType.aiVideo ||
      this.mode != undefined ||
      this.supportedModes != undefined ||
      this.faceImage != undefined
    ) {
      FeaturesMinVersion_VideoLipSyncAbility =
        FeaturesMinVersion.VideoLipSyncAiVideo;
    }
    if (this.mode != undefined) {
      switch (this.mode) {
        case DALipSyncMode.hq:
          FeaturesMinVersion_VideoLipSyncAbility =
            FeaturesMinVersion.VideoLipSyncHQMode;
          break;
        case DALipSyncMode.hq480:
          FeaturesMinVersion_VideoLipSyncAbility =
            FeaturesMinVersion.VideoLipSyncHq480Mode;
      }
    }
    if (
      m.DAUtils.compareSemVersion(e, FeaturesMinVersion_VideoLipSyncAbility) > 0
    ) {
      return e;
    }
    return FeaturesMinVersion_VideoLipSyncAbility;
  }
  childNodes() {
    let e = [];
    let video = this.video;
    if (video != undefined) {
      e.push(video);
    }
    let image = this.image;
    if (image != undefined) {
      e.push(image);
    }
    let audio = this.audio;
    if (audio != undefined) {
      e.push(audio);
    }
    let faceImage = this.faceImage;
    if (faceImage != undefined) {
      e.push(faceImage);
    }
    let videoRefParams = this.videoRefParams;
    if (videoRefParams != undefined) {
      e.push(videoRefParams);
    }
    let videoEffectAudio = this.videoEffectAudio;
    if (videoEffectAudio != undefined) {
      e.push(videoEffectAudio);
    }
    let videoBgmAudio = this.videoBgmAudio;
    if (videoBgmAudio != undefined) {
      e.push(videoBgmAudio);
    }
    let audioBeforeConversion = this.audioBeforeConversion;
    if (audioBeforeConversion != undefined) {
      e.push(audioBeforeConversion);
    }
    let audioToneEmotion = this.audioToneEmotion;
    if (audioToneEmotion != undefined) {
      e.push(audioToneEmotion);
    }
    let selectedFace = this.selectedFace;
    if (selectedFace != undefined) {
      e.push(selectedFace);
    }
    return e;
  }
}
s(
  [g.serializable("reference_type")],
  DALipSyncAbility.prototype,
  "referenceType",
  undefined,
);
s(
  [g.serializable("video", () => u.DAVideoResource)],
  DALipSyncAbility.prototype,
  "video",
  undefined,
);
s(
  [g.serializable("video_effect_audio", () => d.DAAudioResource)],
  DALipSyncAbility.prototype,
  "videoEffectAudio",
  undefined,
);
s(
  [g.serializable("video_bgm_audio", () => d.DAAudioResource)],
  DALipSyncAbility.prototype,
  "videoBgmAudio",
  undefined,
);
s(
  [g.serializable("audio_before_conversion", () => d.DAAudioResource)],
  DALipSyncAbility.prototype,
  "audioBeforeConversion",
  undefined,
);
s(
  [g.serializable("image", () => l.DAImageResource)],
  DALipSyncAbility.prototype,
  "image",
  undefined,
);
s(
  [g.serializable("audio", () => d.DAAudioResource)],
  DALipSyncAbility.prototype,
  "audio",
  undefined,
);
s(
  [g.serializable("audio_effect_id")],
  DALipSyncAbility.prototype,
  "audioEffectId",
  undefined,
);
s(
  [g.serializable("audio_resource_id")],
  DALipSyncAbility.prototype,
  "audioResourceId",
  undefined,
);
s(
  [g.serializable("audio_tone_id")],
  DALipSyncAbility.prototype,
  "audioToneId",
  undefined,
);
s(
  [g.serializable("audio_speed")],
  DALipSyncAbility.prototype,
  "audioSpeed",
  undefined,
);
s(
  [g.serializable("audio_item_platform")],
  DALipSyncAbility.prototype,
  "audioItemPlatform",
  undefined,
);
s(
  [g.serializable("tts_content")],
  DALipSyncAbility.prototype,
  "ttsContent",
  undefined,
);
s([g.serializable("mode")], DALipSyncAbility.prototype, "mode", undefined);
s(
  [g.serializable("supported_modes")],
  DALipSyncAbility.prototype,
  "supportedModes",
  undefined,
);
s(
  [g.serializable("face_image", () => DAImageLipSyncFace)],
  DALipSyncAbility.prototype,
  "faceImage",
  undefined,
);
s(
  [g.serializable("video_ref_params", () => p.DAVideoRefParam)],
  DALipSyncAbility.prototype,
  "videoRefParams",
  undefined,
);
s([g.serializable("seed")], DALipSyncAbility.prototype, "seed", undefined);
s(
  [g.serializable("audio_tone_emotion", () => LipSyncInfoToneEmotion)],
  DALipSyncAbility.prototype,
  "audioToneEmotion",
  undefined,
);
s([g.serializable("prompt")], DALipSyncAbility.prototype, "prompt", undefined);
s(
  [g.serializable("model_req_key")],
  DALipSyncAbility.prototype,
  "modelReqKey",
  undefined,
);
s(
  [g.serializable("selected_face", () => DALipSyncFaceDetail)],
  DALipSyncAbility.prototype,
  "selectedFace",
  undefined,
);
s(
  [g.serializable("before_silence_millisecond")],
  DALipSyncAbility.prototype,
  "beforeSilenceMillisecond",
  undefined,
);
s(
  [g.serializable("after_silence_millisecond")],
  DALipSyncAbility.prototype,
  "afterSilenceMillisecond",
  undefined,
);
