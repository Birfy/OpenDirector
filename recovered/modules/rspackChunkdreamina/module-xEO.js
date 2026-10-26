import r from "uR";
import { DAAICameraAbility } from "./module-src.js";
import { DAGenVideoAbility } from "./module-pi.js";
import { DALipSyncAbility } from "./module-AwI.js";
import { DAMergeVideoAbility } from "./module-hc.js";
import { DASubtitleEraseAbility } from "./module-DO.js";
import { DAVideoAudioEffectAbility } from "./module-aW9.js";
import { DAVideoBGMAbility } from "./module-XH_2.js";
import { DAVideoWorkflowAbility } from "./module-IzQ.js";
import m from "./module-Rd.js";
const o =
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
export class DAVideoGenerateAbilities extends r.DANode {
  constructor() {
    super(...arguments);
    this.subtitleErase = undefined;
    this.lipSync = undefined;
    this.genVideo = undefined;
    this.videoAudioEffect = undefined;
    this.videoBGM = undefined;
    this.mergeVideo = undefined;
    this.workflow = undefined;
    this.aiCamera = undefined;
  }
  childNodes() {
    let e = [];
    let subtitleErase = this.subtitleErase;
    if (subtitleErase != undefined) {
      e.push(subtitleErase);
    }
    let videoAudioEffect = this.videoAudioEffect;
    if (videoAudioEffect != undefined) {
      e.push(videoAudioEffect);
    }
    let lipSync = this.lipSync;
    if (lipSync != undefined) {
      e.push(lipSync);
    }
    let genVideo = this.genVideo;
    if (genVideo != undefined) {
      e.push(genVideo);
    }
    let videoBGM = this.videoBGM;
    if (videoBGM != undefined) {
      e.push(videoBGM);
    }
    let mergeVideo = this.mergeVideo;
    if (mergeVideo != undefined) {
      e.push(mergeVideo);
    }
    let workflow = this.workflow;
    if (workflow != undefined) {
      e.push(workflow);
    }
    let aiCamera = this.aiCamera;
    if (aiCamera != undefined) {
      e.push(aiCamera);
    }
    return e;
  }
}
o(
  [m.serializable("subtitle_erase", () => DASubtitleEraseAbility)],
  DAVideoGenerateAbilities.prototype,
  "subtitleErase",
  undefined,
);
o(
  [m.serializable("lip_sync", () => DALipSyncAbility)],
  DAVideoGenerateAbilities.prototype,
  "lipSync",
  undefined,
);
o(
  [m.serializable("gen_video", () => DAGenVideoAbility)],
  DAVideoGenerateAbilities.prototype,
  "genVideo",
  undefined,
);
o(
  [m.serializable("video_audio_effect", () => DAVideoAudioEffectAbility)],
  DAVideoGenerateAbilities.prototype,
  "videoAudioEffect",
  undefined,
);
o(
  [m.serializable("video_bgm", () => DAVideoBGMAbility)],
  DAVideoGenerateAbilities.prototype,
  "videoBGM",
  undefined,
);
o(
  [m.serializable("merge_video", () => DAMergeVideoAbility)],
  DAVideoGenerateAbilities.prototype,
  "mergeVideo",
  undefined,
);
o(
  [m.serializable("video_workflow", () => DAVideoWorkflowAbility)],
  DAVideoGenerateAbilities.prototype,
  "workflow",
  undefined,
);
o(
  [m.serializable("ai_camera", () => DAAICameraAbility)],
  DAVideoGenerateAbilities.prototype,
  "aiCamera",
  undefined,
);
