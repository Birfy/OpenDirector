import n from "ox";
import s from "ly";
import d from "Na";
import l from "uR";
import { FeaturesMinVersion } from "./module-ew.js";
import { CommonItemPlatform } from "./module-m7.js";
import { DAAudioConfig } from "./module-vSK.js";
import m from "./module-Rd.js";
let o;
export var DAGenerateTTSMode;
const a =
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
o = DAGenerateTTSMode || (DAGenerateTTSMode = {});
o.TTS = "tts";
o.UnifiedEdit = "unified_edit";
o.VideoTranslation = "video_translation";
o.AudioSeparation = "audio_separation";
export class DAVideoTranslationParam extends l.DANode {
  constructor() {
    super(...arguments);
    this.targetLanguage = "";
    this.sourceMaterial = undefined;
  }
  childNodes() {
    let sourceMaterial = this.sourceMaterial;
    if (sourceMaterial === undefined) {
      return [];
    }
    return [sourceMaterial];
  }
}
a(
  [m.serializable("target_language")],
  DAVideoTranslationParam.prototype,
  "targetLanguage",
  undefined,
);
a(
  [m.serializable("source_material", () => s.DAUnifiedEditMaterial)],
  DAVideoTranslationParam.prototype,
  "sourceMaterial",
  undefined,
);
export class DAAudioSeparationParam extends l.DANode {
  constructor() {
    super(...arguments);
    this.sourceMaterial = undefined;
    this.prompt = undefined;
  }
  childNodes() {
    let sourceMaterial = this.sourceMaterial;
    if (sourceMaterial === undefined) {
      return [];
    }
    return [sourceMaterial];
  }
}
a(
  [m.serializable("source_material", () => s.DAUnifiedEditMaterial)],
  DAAudioSeparationParam.prototype,
  "sourceMaterial",
  undefined,
);
a(
  [m.serializable("prompt")],
  DAAudioSeparationParam.prototype,
  "prompt",
  undefined,
);
export class DAIdInfo extends m.Serializable {
  constructor() {
    super(...arguments);
    this.id = "";
    this.itemPlatform = CommonItemPlatform.Loki;
  }
}
a([m.serializable("id")], DAIdInfo.prototype, "id", undefined);
a(
  [m.serializable("item_platform")],
  DAIdInfo.prototype,
  "itemPlatform",
  undefined,
);
export class DATextToSpeechAbility extends l.DANode {
  constructor() {
    super(...arguments);
    this.text = "";
    this.idInfo = undefined;
    this.audioConfig = undefined;
    this.voiceName = "";
    this.mode = DAGenerateTTSMode.TTS;
    this.unifiedEditInput = undefined;
    this.modelReqKey = "";
    this.videoTranslationParam = undefined;
    this.audioSeparationParam = undefined;
  }
  hasVideoMaterial() {
    let e;
    let t;
    let i = false;
    if (
      (t = (e = this.unifiedEditInput) == null ? undefined : e.materialList) !=
      null
    ) {
      t.forEach((e) => {
        if (e.materialType === d.DAUnifiedEditMaterialType.Video) {
          i = true;
        }
      });
    }
    return i;
  }
  calculateMinVersion() {
    if (
      this.mode === DAGenerateTTSMode.VideoTranslation ||
      this.mode === DAGenerateTTSMode.AudioSeparation ||
      this.videoTranslationParam != undefined ||
      this.audioSeparationParam != undefined
    ) {
      this.minVersion = FeaturesMinVersion.SeedAudioV2;
    } else if (
      this.mode === DAGenerateTTSMode.UnifiedEdit ||
      this.unifiedEditInput != undefined ||
      this.modelReqKey != ""
    ) {
      this.minVersion = FeaturesMinVersion.AudioTTSUnifiedEdit;
    }
    return super.calculateMinVersion();
  }
  childNodes() {
    let e = [];
    let unifiedEditInput = this.unifiedEditInput;
    if (unifiedEditInput != undefined) {
      e.push(unifiedEditInput);
    }
    if (this.videoTranslationParam != undefined) {
      e.push(this.videoTranslationParam);
    }
    if (this.audioSeparationParam != undefined) {
      e.push(this.audioSeparationParam);
    }
    return e;
  }
}
a([m.serializable("text")], DATextToSpeechAbility.prototype, "text", undefined);
a(
  [m.serializable("id_info", () => DAIdInfo)],
  DATextToSpeechAbility.prototype,
  "idInfo",
  undefined,
);
a(
  [m.serializable("audio_config", () => DAAudioConfig)],
  DATextToSpeechAbility.prototype,
  "audioConfig",
  undefined,
);
a(
  [m.serializable("voice_name")],
  DATextToSpeechAbility.prototype,
  "voiceName",
  undefined,
);
a([m.serializable("mode")], DATextToSpeechAbility.prototype, "mode", undefined);
a(
  [m.serializable("unified_edit_input", () => n.DAUnifiedEditInput)],
  DATextToSpeechAbility.prototype,
  "unifiedEditInput",
  undefined,
);
a(
  [m.serializable("model_req_key")],
  DATextToSpeechAbility.prototype,
  "modelReqKey",
  undefined,
);
a(
  [m.serializable("video_translation_param", () => DAVideoTranslationParam)],
  DATextToSpeechAbility.prototype,
  "videoTranslationParam",
  undefined,
);
a(
  [m.serializable("audio_separation_param", () => DAAudioSeparationParam)],
  DATextToSpeechAbility.prototype,
  "audioSeparationParam",
  undefined,
);
