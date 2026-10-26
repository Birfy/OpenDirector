import r from "q2";
import a from "Wq";
import n from "uR";
import s from "pz";
import { FeaturesMinVersion } from "./module-ew.js";
import { DAVideoGenV2VAVMix } from "./module-Gp.js";
import p from "./module-Rd.js";
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
export class DAVideoAudioEffectAbility extends n.DANode {
  constructor() {
    super(...arguments);
    this.originHistoryId = undefined;
    this.originItemId = undefined;
    this.videoRefParams = undefined;
    this.videoResource = undefined;
    this.avMix = undefined;
  }
  afterInit() {
    super.afterInit();
    this.minVersion = FeaturesMinVersion.VideoAudioEffectAbility;
  }
  calculateMinVersion() {
    let e = super.calculateMinVersion();
    let FeaturesMinVersion_VideoAudioEffectAbility =
      FeaturesMinVersion.VideoAudioEffectAbility;
    if (
      s.DAUtils.compareSemVersion(
        e,
        FeaturesMinVersion_VideoAudioEffectAbility,
      ) > 0
    ) {
      return e;
    }
    return FeaturesMinVersion_VideoAudioEffectAbility;
  }
  childNodes() {
    let e = [];
    let videoRefParams = this.videoRefParams;
    if (videoRefParams != undefined) {
      e.push(videoRefParams);
    }
    let videoResource = this.videoResource;
    if (videoResource != undefined) {
      e.push(videoResource);
    }
    let avMix = this.avMix;
    if (avMix != undefined) {
      e.push(avMix);
    }
    return e;
  }
}
o(
  [p.serializable("origin_history_id", undefined, "int64")],
  DAVideoAudioEffectAbility.prototype,
  "originHistoryId",
  undefined,
);
o(
  [p.serializable("origin_item_id", undefined, "int64")],
  DAVideoAudioEffectAbility.prototype,
  "originItemId",
  undefined,
);
o(
  [p.serializable("video_ref_params", () => r.DAVideoRefParam)],
  DAVideoAudioEffectAbility.prototype,
  "videoRefParams",
  undefined,
);
o(
  [p.serializable("video_resource", () => a.DAVideoResource)],
  DAVideoAudioEffectAbility.prototype,
  "videoResource",
  undefined,
);
o(
  [p.serializable("av_mix", () => DAVideoGenV2VAVMix)],
  DAVideoAudioEffectAbility.prototype,
  "avMix",
  undefined,
);
