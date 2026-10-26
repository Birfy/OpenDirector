import n from "uR";
import s from "./module-Rd.js";
let o;
export var DAGenerateVideoAudioScene;
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
o = DAGenerateVideoAudioScene || (DAGenerateVideoAudioScene = {});
o[(o.BGM = 0)] = "BGM";
o[(o.EFFECT = 1)] = "EFFECT";
export class DAVideoGenV2VAVMix extends n.DANode {
  constructor() {
    super(...arguments);
    this.enable = undefined;
    this.videoItemId = undefined;
    this.audioVid = undefined;
    this.scene = undefined;
  }
}
a(
  [s.serializable("enable")],
  DAVideoGenV2VAVMix.prototype,
  "enable",
  undefined,
);
a(
  [s.serializable("video_item_id", undefined, "int64")],
  DAVideoGenV2VAVMix.prototype,
  "videoItemId",
  undefined,
);
a(
  [s.serializable("audio_vid")],
  DAVideoGenV2VAVMix.prototype,
  "audioVid",
  undefined,
);
a([s.serializable("scene")], DAVideoGenV2VAVMix.prototype, "scene", undefined);
