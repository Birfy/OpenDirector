import { ServerAudioResource } from "./module-as.js";
import { ServerImageResource } from "./module-TP6.js";
import { ServerVideoResource } from "./module-fH.js";
import { ServerLipSyncFaceDetail } from "./module-QWM.js";
import { LipSyncVoiceInfo } from "./module-z4.js";
import l from "./module-Rd.js";
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
export class ServerLipSyncImageOpt extends l.Serializable {
  constructor() {
    super(...arguments);
    this.image = undefined;
    this.audio = undefined;
    this.audioVideo = undefined;
    this.resourceIdStd = undefined;
    this.resourceIdLoopy = undefined;
    this.ttsContent = undefined;
    this.mode = undefined;
    this.faceImage = undefined;
    this.seed = undefined;
    this.audioBeforeConversion = undefined;
    this.voiceInfo = undefined;
    this.prompt = undefined;
    this.modelReqKey = undefined;
    this.selectedFace = undefined;
    this.beforeSilenceMillisecond = undefined;
    this.afterSilenceMillisecond = undefined;
  }
}
o(
  [l.serializable("image", () => ServerImageResource)],
  ServerLipSyncImageOpt.prototype,
  "image",
  undefined,
);
o(
  [l.serializable("audio", () => ServerAudioResource)],
  ServerLipSyncImageOpt.prototype,
  "audio",
  undefined,
);
o(
  [l.serializable("audio_video", () => ServerVideoResource)],
  ServerLipSyncImageOpt.prototype,
  "audioVideo",
  undefined,
);
o(
  [l.serializable("resource_id_std")],
  ServerLipSyncImageOpt.prototype,
  "resourceIdStd",
  undefined,
);
o(
  [l.serializable("resource_id_loopy")],
  ServerLipSyncImageOpt.prototype,
  "resourceIdLoopy",
  undefined,
);
o(
  [l.serializable("tts_content")],
  ServerLipSyncImageOpt.prototype,
  "ttsContent",
  undefined,
);
o([l.serializable("mode")], ServerLipSyncImageOpt.prototype, "mode", undefined);
o(
  [l.serializable("face_image", () => ServerImageResource)],
  ServerLipSyncImageOpt.prototype,
  "faceImage",
  undefined,
);
o([l.serializable("seed")], ServerLipSyncImageOpt.prototype, "seed", undefined);
o(
  [l.serializable("audio_before_conversion", () => ServerAudioResource)],
  ServerLipSyncImageOpt.prototype,
  "audioBeforeConversion",
  undefined,
);
o(
  [l.serializable("voice_info", () => LipSyncVoiceInfo)],
  ServerLipSyncImageOpt.prototype,
  "voiceInfo",
  undefined,
);
o(
  [l.serializable("prompt")],
  ServerLipSyncImageOpt.prototype,
  "prompt",
  undefined,
);
o(
  [l.serializable("model_req_key")],
  ServerLipSyncImageOpt.prototype,
  "modelReqKey",
  undefined,
);
o(
  [l.serializable("selected_face", () => ServerLipSyncFaceDetail)],
  ServerLipSyncImageOpt.prototype,
  "selectedFace",
  undefined,
);
o(
  [l.serializable("before_silence_millisecond")],
  ServerLipSyncImageOpt.prototype,
  "beforeSilenceMillisecond",
  undefined,
);
o(
  [l.serializable("after_silence_millisecond")],
  ServerLipSyncImageOpt.prototype,
  "afterSilenceMillisecond",
  undefined,
);
