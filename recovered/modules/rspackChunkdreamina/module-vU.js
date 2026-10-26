import { DAAudioResource } from "./module-GL.js";
import { DALinkableResource } from "./module-Pb.js";
import d from "Rd";
let o;
export var VoiceSourceType;
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
o = VoiceSourceType || (VoiceSourceType = {});
o.VoiceSourceTypeGenerated = "generated";
o.VoiceSourceTypeUpload = "upload";
export class DAVoiceResource extends DALinkableResource {
  constructor() {
    super(...arguments);
    this.audioInfo = undefined;
    this.source = VoiceSourceType.VoiceSourceTypeGenerated;
  }
  afterInit() {
    super.afterInit();
    this.type = "voice";
  }
  childNodes() {
    let e = [];
    let audioInfo = this.audioInfo;
    if (audioInfo != undefined) {
      e.push(audioInfo);
    }
    return e;
  }
}
a(
  [d.serializable("audio_info", () => DAAudioResource)],
  DAVoiceResource.prototype,
  "audioInfo",
  undefined,
);
a([d.serializable("source")], DAVoiceResource.prototype, "source", undefined);
