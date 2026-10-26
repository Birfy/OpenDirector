import { ServerAudioResource } from "./module-as.js";
import { ServerVideoResource } from "./module-fH.js";
import { LipSyncVoiceInfo } from "./module-z4.js";
import s from "./module-Rd.js";
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
export class ServerLipSyncOpt extends s.Serializable {
  constructor() {
    super(...arguments);
    this.video = undefined;
    this.audio = undefined;
    this.ttsContent = undefined;
    this.videoEffectAudio = undefined;
    this.videoBgmAudio = undefined;
    this.audioBeforeConversion = undefined;
    this.voiceInfo = undefined;
  }
}
o(
  [s.serializable("video", () => ServerVideoResource)],
  ServerLipSyncOpt.prototype,
  "video",
  undefined,
);
o(
  [s.serializable("audio", () => ServerAudioResource)],
  ServerLipSyncOpt.prototype,
  "audio",
  undefined,
);
o(
  [s.serializable("tts_content")],
  ServerLipSyncOpt.prototype,
  "ttsContent",
  undefined,
);
o(
  [s.serializable("video_effect_audio", () => ServerAudioResource)],
  ServerLipSyncOpt.prototype,
  "videoEffectAudio",
  undefined,
);
o(
  [s.serializable("video_bgm_audio", () => ServerAudioResource)],
  ServerLipSyncOpt.prototype,
  "videoBgmAudio",
  undefined,
);
o(
  [s.serializable("audio_before_conversion", () => ServerAudioResource)],
  ServerLipSyncOpt.prototype,
  "audioBeforeConversion",
  undefined,
);
o(
  [s.serializable("voice_info", () => LipSyncVoiceInfo)],
  ServerLipSyncOpt.prototype,
  "voiceInfo",
  undefined,
);
